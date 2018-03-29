app.WeatherList= Backbone.Collection.extend({
  model: app.Weather,
  // url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22dublin%2C%20IE%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
 
 url:'http://localhost:3000/alarm',
  initialize: function(options) {
    this.fetch();
  },
  
  });



// instance of the Collection
app.todoList = new app.TodoList();
// app.weatherList = new app.WeatherList();
// app.weatherList.fetch();

