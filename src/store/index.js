import { createStore } from 'vuex'
import API from '@/axios/API';

export default createStore({
  state:
  {
    currentPlaylist: JSON.parse(localStorage.getItem('currentPlaylist') ||'{}'),
    currentSongIndex: JSON.parse(localStorage.getItem('currentSongIndex') ||'-1'),
    shuffle: JSON.parse(localStorage.getItem('shuffle') ||'false'),
    repeatMode: JSON.parse(localStorage.getItem('repeatMode') || '0'),
    volume: JSON.parse(localStorage.getItem('volume') || '0.75'),
    songHistory: JSON.parse(localStorage.getItem('songHistory') ||'[]'),
    songs:{}, //memory leak
    playlists:{}, //memory leak
    users:{}, //memory leak
    isPlaying: false,
    currentUser: undefined,
    accentColors: [
      {hex:"#6699ff",decimal:"102, 153, 255"},
      {hex:"#ff3333",decimal:"255, 51 , 51 "},
      {hex:"#ff3399",decimal:"255, 51 , 153"},
      {hex:"#ff6600",decimal:"255, 102, 0  "},
      {hex:"#33cc66",decimal:"51 , 204, 102"}
    ]
  },
  getters:
  {
    getCurrentPlaylistSongPos(state)
    {
      if (state.currentPlaylist.songs)
      {
        return {playlistID: state.currentPlaylist.id, edited:state.currentPlaylist.edited, songPos:state.currentPlaylist.songs[state.currentSongIndex].pos};
      }
    },
    getCurrentSong(state)
    {
      if (state.currentPlaylist.songs)
      return state.currentPlaylist.songs[state.currentSongIndex].id;
    },
    getCurrentUser(state) { return state.currentUser },
    getPlaylist: (state) => (id) => { return state.playlists[id] || {"error":{"status":404,"message":"Vuex: Song not found"}}; },
    getSong: (state) => (id) => { return state.songs[id] || {"error":{"status":404,"message":"Vuex: Playlist not found"}}; },
    getUser: (state) => (login) => { return state.users[login] || {"error":{"status":404,"message":"Vuex: User not found"}}; },
    getSongHistory(state) { return state.songHistory.map((song, index) => { return {id:song,pos:index} }); }
  },
  mutations:
  {
    setCurrentPlaylistAndSong(state,playlistSong)
    {
      state.isPlaying=false;
      if (JSON.stringify(playlistSong.playlist) !== JSON.stringify(state.currentPlaylist)) state.shuffle=false;

      state.currentPlaylist=playlistSong.playlist;
      localStorage.setItem('currentPlaylist', JSON.stringify(state.currentPlaylist));

      state.currentSongIndex=playlistSong.songIndex;
      localStorage.setItem('currentSongIndex', JSON.stringify(state.currentSongIndex));

      setTimeout(()=>{state.isPlaying=true}, 0);
    },
    toggleRepeatMode(state)
    {
      state.repeatMode = (state.repeatMode+1)%3;
      localStorage.setItem('repeatMode', JSON.stringify(state.repeatMode));
    },
    shiftCurrentSong(state,shift)
    {
      state.isPlaying=false;
      state.currentSongIndex+=shift;
      if (state.currentSongIndex>=state.currentPlaylist.songs.length) state.currentSongIndex=0;
      if (state.currentSongIndex<0) state.currentSongIndex=state.currentPlaylist.songs.length-1;
      localStorage.setItem('currentSongIndex', JSON.stringify(state.currentSongIndex));
      setTimeout(()=>{state.isPlaying=true}, 0);
    },
    playNextSong(state)
    {
      state.isPlaying=false;
      switch (state.repeatMode)
      {
        case 0:
          state.currentSongIndex++;
          if (state.currentSongIndex>=state.currentPlaylist.songs.length)
          {
            state.currentSongIndex=0;
            localStorage.setItem('currentSongIndex', JSON.stringify(state.currentSongIndex));
          }
          else
          {
            localStorage.setItem('currentSongIndex', JSON.stringify(state.currentSongIndex));
            setTimeout(()=>{state.isPlaying=true}, 0);
          }
          return;

        case 1:
          state.currentSongIndex++;
          if (state.currentSongIndex>=state.currentPlaylist.songs.length) state.currentSongIndex=0;
          localStorage.setItem('currentSongIndex', JSON.stringify(state.currentSongIndex));
          setTimeout(()=>{state.isPlaying=true}, 0);
          return;

        case 2:
          localStorage.setItem('currentSongIndex', JSON.stringify(state.currentSongIndex));
          setTimeout(()=>{state.isPlaying=true}, 0);
          return;
      }
    },
    shuffle(state)
    {
      state.shuffle=!state.shuffle;
      if (state.shuffle)
      for (let i = state.currentPlaylist.songs.length - 1; i > 0; i--)
      {
        let j = Math.floor(Math.random() * (i + 1));
        if (i!==state.currentSongIndex && j!==state.currentSongIndex)
        [state.currentPlaylist.songs[i], state.currentPlaylist.songs[j]] = [state.currentPlaylist.songs[j], state.currentPlaylist.songs[i]];
      }
      else
      {
        state.currentSongIndex=state.currentPlaylist.songs[state.currentSongIndex].pos;
        state.currentPlaylist.songs.sort((a,b)=>{return a.pos-b.pos});
      }
      state.currentPlaylist.edited=Date.now();
      localStorage.setItem('shuffle', JSON.stringify(state.shuffle));
      localStorage.setItem('currentPlaylist', JSON.stringify(state.currentPlaylist));
      localStorage.setItem('currentSongIndex', JSON.stringify(state.currentSongIndex));
    },
    async setCurrentUserByToken(state)
    {
      if (localStorage.getItem('authJWT'))
      {
        const r = await API.get('me');
        if (r.error)
        {
          // localStorage.setItem('authJWT', null);
          state.currentUser = null;
        }
        else state.currentUser = r;
      }
      else
      {
        // localStorage.setItem('authJWT', null);
        state.currentUser = null;
      }
    },
    logIn(state,loginData)
    {
      localStorage.setItem('authJWT', loginData.authJWT);
      state.currentUser = loginData.user;
    },
    logOut(state)
    {
      localStorage.setItem('authJWT', null);
      state.currentUser=null;
      // state.songs={}; //memory leak
      // state.playlsts={}; //memory leak
    },
    togglePlayingState(state)
    {
      state.isPlaying=!state.isPlaying;
    },
    loadSong(state,song)
    {
      state.songs[song.id]=song.data;
    },
    loadPlaylist(state,playlist)
    {
      state.playlists[playlist.id]=playlist.data;
    },
    loadUser(state,user)
    {
      state.users[user.login]=user.data;
    },
    setVolume(state,volume)
    {
      state.volume=volume;
      localStorage.setItem('volume', JSON.stringify(state.volume));
    },
    clearSongHistory(state)
    {
      state.songHistory=[];
      localStorage.setItem('songHistory', JSON.stringify(state.songHistory));
    },
    addSongToCurrentPlaylistEnd(state,id)
    {
      if (!state.currentPlaylist.songs)
      {
        state.currentPlaylist = {id: Date.now(), songs: [{id:id,pos:0}], edited: Date.now() };
        state.currentSongIndex=0;
        state.isPlaying=true;
        return;
      }
      state.currentPlaylist.songs.push({id:id,pos:state.currentPlaylist.songs.length});
      state.currentPlaylist.edited=Date.now();
    },
    addSongToCurrentPlaylistNext(state,id)
    {
      if (!state.currentPlaylist.songs)
      {
        state.currentPlaylist = {id: Date.now(), songs: [{id:id,pos:0}], edited: Date.now() };
        state.currentSongIndex=0;
        state.isPlaying=true;
        return;
      }
      state.currentPlaylist.songs.splice(state.currentSongIndex+1,0,{id:id,pos:state.currentSongIndex+1});
      for (let i=state.currentSongIndex+2;i<state.currentPlaylist.songs.length;i++)
      {
        state.currentPlaylist.songs.pos++;
      }
      state.currentPlaylist.edited=Date.now();
    },
    clearCurrentPlaylist(state)
    {
      if (!state.currentPlaylist.songs) return;
      const currentSong = state.currentPlaylist.songs[state.currentSongIndex];
      state.currentPlaylist.songs = state.currentPlaylist.songs.filter( song=> { return song==currentSong});
      state.currentPlaylist.edited=Date.now();
      state.currentPlaylist.songs[0].pos = 0;
      state.currentSongIndex=0;
    },
    updateSongHistory(state)
    {
      if (!state.currentPlaylist.songs) return;

      const currentSong = state.currentPlaylist.songs[state.currentSongIndex]?.id;

      const found = state.songHistory.findIndex((song) => song == currentSong);
      if (found!=-1) state.songHistory.splice(found,1);

      state.songHistory.unshift(currentSong);

      if (state.songHistory.length>15) state.songHistory.pop();

      localStorage.setItem('songHistory', JSON.stringify(state.songHistory));
    }
  },
  actions:
  {
    async loadSong({commit},id)
    {
      const response = await API.get('songs/'+id);
      commit("loadSong", { id: id, data: response });
    },
    async loadPlaylist({commit},id)
    {
      const response = await API.get('playlists/'+id);
      commit("loadPlaylist", { id: id, data: response });
    },
    async loadUser({commit},login)
    {
      const response = await API.get('users/'+login+'/profile');
      commit("loadUser", { login: login, data: response });
    },

    logIn({commit},loginData) { commit("logIn",loginData) },
    setCurrentUserByToken({commit}) { commit("setCurrentUserByToken") },
    logOut({commit}) { commit("logOut") },

    setCurrentPlaylistAndSong({commit}, playlistSong)
    {
      commit("updateSongHistory");
      commit("setCurrentPlaylistAndSong",JSON.parse(JSON.stringify(playlistSong)));
    },
    shiftCurrentSong({commit}, shift)
    {
      commit("updateSongHistory");
      commit("shiftCurrentSong", shift);
    },
    playNextSong({commit})
    {
      commit("updateSongHistory");
      commit("playNextSong");
    },
    toggleRepeatMode({commit}) { commit("toggleRepeatMode") },
    shuffle({commit}) { commit("shuffle") },
    togglePlayingState({commit}) { commit("togglePlayingState") },
    setVolume({commit},volume) { commit("setVolume",volume) },

    clearSongHistory({commit}) { commit("clearSongHistory") },
    clearCurrentPlaylist({commit}) { commit("clearCurrentPlaylist") },
    addSongToCurrentPlaylistEnd({commit},id) { commit("addSongToCurrentPlaylistEnd",id) },
    addSongToCurrentPlaylistNext({commit},id) { commit("addSongToCurrentPlaylistNext",id) }
  },
  modules: {}
})
