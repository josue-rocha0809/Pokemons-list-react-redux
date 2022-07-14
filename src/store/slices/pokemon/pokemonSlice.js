import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
     page: 0,
     pokemons: [],
     isLoading:false

    },
    reducers: {
   startLoadingPokemons: (state, /* Action */) => {
        state.isLoading =  true;
        /* sin toolkit
       return (
          ...state,
          isLoading: isLoading = true
        )
        */
       },
    setPokemons: (state , action) => {
        state.pokemons = action.payload.pokemons
        state.page= action.payload.page
        state.isLoading = false
     }

    }
  });
  
  // Action creators are generated for each case reducer function
  export const { startLoadingPokemons, setPokemons  } = pokemonSlice.actions
  