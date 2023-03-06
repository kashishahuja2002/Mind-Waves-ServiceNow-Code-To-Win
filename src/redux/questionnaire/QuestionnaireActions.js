import http from '../../services/_httpServices';

export const addMood = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", {}, body)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log("Successfully added Mood: ", response.data.data);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}
