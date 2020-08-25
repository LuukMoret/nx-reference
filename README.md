# Prerequisites

- Install Node
- Install Yarn
- Install Docker

Copy and rename .env-example to .env and provide values

## Project structure

- apps
  - demo-angular-web
  - demo-admin-angular-web
  - demo-api
  - bla-angular-web
  - bla-angular-desktop
  - bla-api
- libs
  - demo-angular-web
    - feature1
    - feature2
  - demo-admin-angular-web
    - feature1
    - feature2
  - demo-api
    - domain1
      - interfaces
      - api
        - dto
        - entities
        - domain1.controller
        - domain1.service
    - domain2
      - interfaces
      - api
        - dto
        - entities
        - domain2.controller
        - domain2.service
  - bla-api
    - domain3
      - interfaces
      - api
        - dto
        - entities
        - domain3.controller
        - domain3.service
    - domain4
      - interfaces
      - api
        - dto
        - entities
        - domain4.controller
        - domain4.service
    - shared
      - util
      - ui
