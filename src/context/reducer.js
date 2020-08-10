export const initialState = {
    user: null,
    // token: 'BQCY2vuadYaOGzSKMd4M1GeKBIFb68_lvQdM_138oSr7h4EFs4XK23-vJ-egPUxypOgTr5pi0HJOb6jubrxqDg9nZdcK78DN6p1JyQGr9dFM8CvCQvvSlEkGK1HLh8ntLUDXgoKFEFSX3yGwdCnHoPmDKpdAids2DOF70clJ2W8J98Mb',
    playlists: [],
    playing: false,
    discover_weekly: null,
    item: null
};

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
};

export default reducer;
