const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

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
             console.log('getUsersVideo')
            resolve(['video1', 'video2', 'video3'])
        }, 2000);

    })

};

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getVideoDetails')
            resolve({ title: 'video title' })
        }, 2500);

    })
};
loginUser('valstillhardt@gmail.com', '1234567')
    .then((user) => getUsersVideo(user.email))
    .then((videos) => getVideoDetails( videos[0] ))
    .catch((error) => console.log({ error }))
   