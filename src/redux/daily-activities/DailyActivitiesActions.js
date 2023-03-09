import http from '../../services/_httpServices';

export const addWater = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", {}, body)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log("Successfully added water: ", response.data.data);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const addMeditation = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", {}, body)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log("Successfully added meditation: ", response.data.data);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}

export const addExercise = (url, body) => {
    return (dispatch) => {
        http.HttpCall(url, "post", {}, body)
            .then((response) => {
                if(response.data.status === 200) {
                    console.log("Successfully added exercise: ", response.data.data);
                }
            })
            .catch((error) => {
                console.log("Error: ",error);
            })
    }
}
