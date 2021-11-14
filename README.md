# sunflower SunCalc
1. Сервис SunCalc - портал, позволяющий быстро и просто произвести расчёт урожайности подсолнечника. При этом пользование порталом не требует специальных знаний, а порог вхождения на портал для его полноценного использования крайне низок. Работа заключается всего в двух действиях: загрузить геопозицию и фото корзинки подсолнечника и далее получить результаты расчётов.
2. Тнхнологии проекта: PWA, django, DRM, python, PyTorch, celery, redis, react js, docker.
3. Мы не стали ограничивать себя приложением. SunCalc уже на этапе MVP стал кросс-платформенным, а в планах сделать его омниканальным. 

## Клонируем репозиторий:
~~~  
git clone https://github.com/kamna2021/agrohack 
cd agrohack
~~~

### Установка docker

Для работы необходим Docker. С инструкцией по установке можно ознакомиться <a target='_blank' href='https://docs.docker.com/compose/install/'>здесь</a>

### Сборка контейнеров
~~~  
docker-compose up -d --build
~~~

### Доступ к API сервера

Сервис будет доступе по адресу http://localhost/api/

### Описание API
http://localhost/api/typeflower/ - типы подсолнечника;
http://localhost/api/flower/ - фотографии и характеристики подсолнечника;
http://localhost/api/place/ - поле;
http://localhost/api/audit/ - аудит одного поля;
http://localhost/api/organization/ - агропредприятие.

### Запуск и доступ к клиенту
~~~  
cd front
yarn install
yarn start
~~~
Сервис будет доступе по адресу http://localhost:3000

