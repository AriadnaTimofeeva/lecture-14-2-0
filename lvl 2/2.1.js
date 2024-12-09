/*
Задание 1:
Условие: Необходимо выполнить параллельно три запроса к различным публичным API:
Получить данные о пользователях.
Получить данные о постах.
Получить данные о комментариях.
Все эти запросы нужно выполнить параллельно с использованием Promise.all, а затем вывести результат в консоль, 
когда все данные будут получены. Создайте функцию fetchData, которая будет принимать URL и возвращать промис.
*/



const usersUrl = 'https://jsonplaceholder.typicode.com/users'; 
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'; 
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

// ф-ция для выполнения запроса по указанному URL
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка!');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}


async function getData() {
    try {
        // выполнение запросов параллельно:
        const [users, posts, comments] = await Promise.all([
            fetchData(usersUrl),
            fetchData(postsUrl),
            fetchData(commentsUrl)
        ]);

        // вывод результатов:
        console.log('Пользователи:', users);
        console.log('Посты:', posts);
        console.log('Комментарии:', comments);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

getData();
