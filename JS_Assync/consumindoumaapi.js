const axios = require('axios')

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true;

        if (error) {
            reject(new Error("Error in login!"))
        }
        console.log("User logged!")
        resolve({ email })
    },)
};

const getUsersVideo = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3'])
        }, 2000);

    })
};
const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ title: 'video title' })
        }, 2500);

    })
};

const displayUser = async () => {
    const user = await loginUser("valentino.stillhardt@gmail.com","123456");
    const videos  = await getUsersVideo(user.email);
    const videoDetails = await getVideoDetails(videos[0]);
    
    console.log({ videoDetails })
}
const fetchApi = async () => {
    const {data} = await.get("https://jsonplaceholder.typicode.com/todos/1")

    console.log({ data })
}

fetchApi();