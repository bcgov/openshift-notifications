# Heroku Fullstack Template

This codebase is a wrapper for running and deploying a fullstack application to Heroku with ease.

#### Requirements:

- [Heroku Account](https://signup.heroku.com/)
- [Docker](https://www.docker.com/)
- [Windows Subsystem for Linux (Windows users only)](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

## Getting Started

1. Run the following command:
    ```
    (cd .scripts && bash local.sh run_dev)
    ```
   
2. Visit the application on the following ports/URLs:
   - Client: http://localhost:3000
   - Server: http://localhost:5000
   - Database: Port 27017
 
## Commands

| Command                                        | Target | Description                                                                    |
|------------------------------------------------|--------|--------------------------------------------------------------------------------|
| (cd .scripts && bash local.sh run_dev)         | Local  | Launches the development environment (includes hot reloading)                  |
| (cd .scripts && bash local.sh clean_dev)       | Local  | Purges the development environment containers, images and volumes              |
| (cd .scripts && bash local.sh run_prod)        | Local  | Launches the production environment (does not connect to actual prod database) |
| (cd .scripts && bash local.sh clean_prod)      | Local  | Purges the production environment containers, images and volumes               |
| (cd .scripts && bash local.sh test_server)     | Local  | Runs the server tests                                                          |
| (cd .scripts && bash local.sh test_client)     | Local  | Runs the client tests                                                          |
| (cd .scripts && bash local.sh seed_db)         | Local  | Seeds the dev database with dummy data                                         |
| (cd .scripts && bash local.sh wipe_db)         | Local  | Purges all dev database tables                                                 |
| (cd .scripts && bash heroku.sh login_heroku)   | Heroku | Logs into the Heroku container registry using Docker                           |
| (cd .scripts && bash heroku.sh deploy_server)  | Heroku | Builds the server image, pushes it, and releases it on Heroku                  |
| (cd .scripts && bash heroku.sh deploy_client)  | Heroku | Builds the client image, pushes it, and releases it on Heroku                  |
| (cd .scripts && bash heroku.sh deploy          | Heroku | Runs the above 3 commands consecutively                                        |

## Deployment

There are two ways to deploy the app. Via manually, or [GitHub Actions](https://github.com/features/actions) (CI/CD). 
But first, there are some prerequisites to fulfill.

1. [Login to Heroku](https://id.heroku.com/login)

2. [Create an auth token](https://dashboard.heroku.com/account/applications/authorizations/new)

3. [Create server app name](https://dashboard.heroku.com/new-app)

4. [Create client app name](https://dashboard.heroku.com/new-app)

5. [Add your database as an addon](https://elements.heroku.com/addons). Choose an addon, click the install button and 
search for your server app name to provision it to

6. [Navigate to your dashboard](https://dashboard.heroku.com/apps). Click "my-server-app-name" > Settings > Reveal
Config Vars. Change the pre-determined database url key to `DATABASE_URL`

### Manual

1. Rename [.env-example](.env-example) to `.env` and paste in the values you just obtained from steps 1, 2, 3, 4 above

2. Run the following command:
    ```
    (cd .scripts && bash heroku.sh deploy)
    ```

### GitHub Actions (CI/CD)

1. Navigate to Settings > Secrets in your GitHub repository

2. Create secrets for the values you just obtained from steps 1, 2, 3, 4 above. 
(Ensure the secret names are identical to the ones in [.env-example](.env-example))

3. Merge some code into master branch

----

After completing either deployment method, your full-stack app should be viewable on the following public URLs shortly:
   - https://{MY-SERVER-APP-NAME}.herokuapp.com/
   - https://{MY-CLIENT-APP-NAME}.herokuapp.com/
 
## License

Code released under the [Apache License, Version 2.0](LICENSE).
