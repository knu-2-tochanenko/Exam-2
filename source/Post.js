class Post {
    constructor(country, city, street, flat) {
        this._country = country;
        this._organization = city;
        this._unit = street;
        this._employee = flat;
        this._key = null;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }

    get city(){
        return this._organization;
    }

    set city(value){
        this._organization=value;
    }

    get street(){
        return this._unit;
    }

    set street(value){
        this._unit=value;
    }

    get flat(){
        return this._employee;
    }

    set flat(value){
        this._employee=value;
    }

    get key(){
        return this._key;
    }

    set key(value){
        this._key=value;
    }
}