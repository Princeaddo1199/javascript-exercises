const getTheTitles = function(arr) {
    return arr.map((book) => book.title);

};
getTheTitles(Books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'

    }
])
// Do not edit below this line
module.exports = getTheTitles;
