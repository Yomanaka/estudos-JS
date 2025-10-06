const loginUserPromisse = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error("Error in login!"))
        }
        console.log("User logged!")
        resolve({ email })
    },1500)
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
            callback({ title: 'video title' })
        }, 2500);

    })
};

loginUserPromisse('valstillhardt@gmail.com', '1234567').then((user) => {
    console.log({ user })
}).catch((error) => {
    console.log({ error })
});