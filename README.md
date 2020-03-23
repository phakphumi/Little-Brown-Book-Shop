# Little Brown Book Shop (PoS)
This is the best project which I can do during the limit of time. I used 3 days (2 hours per day) for studying Vue document due to I have not used this library for more than 3 years. Hopefully, this project will impress you.

## How to start project
### in local
1. run `yarn install` at the root project folder.
2. run `yarn serve`.
3. enter to application with [http://localhost:8080](http://localhost:8080).
4. enjoy.
### for production
1. run `yarn build`
2. use files and folder inside `dist` directory to deploy
3. enjoy

- for unit-test please run `yarn test:unit`
- Deployed project access via [https://bit.ly/33GvphB](https://bit.ly/33GvphB).

## ENV Description
- `VUE_APP_BOOK_LIST_API` is used to set the book API url.
- `VUE_APP_DISCOUNT_BOOKS` is used to set isbn (id field on API) for discount. And it will be unique discount. Please use comma (,) to separate each isbn.
- for production please set env on `.env.production`
- for beta please use `.env.beta`
- for otherwise please use `.env`
