const home = {
    state: {
        welcomeData: [
            {
                id: '1',
                title: 'Школа',
                text: 'Школа Школа Школа',
                imgUrl: 'http://vyshnivetska-gromada.gov.ua/wp-content/uploads/2017/11/Рисунок3.jpg',
            },
            {
                id: '2',
                title: 'Гімн',
                text: 'Школа Школа Школа Школа',
                imgUrl: 'http://vyshnivetska-gromada.gov.ua/wp-content/uploads/2017/11/IMG_20180503_105434-1024x768.jpg',
            },
            {
                id: '3',
                title: 'Гімн школи',
                text: 'Школа Школа Школа Школа Школа',
                imgUrl: 'http://vyshnivetska-gromada.gov.ua/wp-content/uploads/2017/11/32690285_607411639622197_8029545525713829888_n-300x225.jpg',
            },
        ],
    },
    getters: {
        welcome(state) {
            return state.welcomeData;
        }
    }
}

export default home;