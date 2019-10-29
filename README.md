# Pasos para la instalacion 
# appCollege

## Configure el proyecto
```
npm install
```
```
composer install
```
```
cp .env.example .env
```
```
php artisan key:generate
```

## cambiar las credenciales de la base de datos
```
crear una base de datos en mysql "appCollege"
```
```
DB_DATABASE=appCollege
```
```
DB_USERNAME=root
```
```
DB_PASSWORD=
```
# suba las migraciones
```
php artisan migrate --seed
```
### Compile
```
npm run watch
```

### Levante el servidor
```
php artisan serve
```


### Visualice en:
```
http://localhost:8000
```
```
logearse usuario: taisale@gmail.com  contraseña:123
```
