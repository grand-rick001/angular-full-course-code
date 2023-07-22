# Observables and Rxjs

Today I learnt about observables and how they stream data, and how we can subscribe to them to get access to that data.

Observables have three optional parameters for advanced programming, which are:
    - next -> calls the stream of data
    - complete -> called when the stream of data is complete
    - error -> called when an error has been found

I also leant about the various `CRUD` operations by doing some hands-on API calls.

Lastly, I learnt about the `Httprequest` property that for instance, can be used in a `GET` method to retrieve metadata about the request. 

This metadata is very helpful and can be applied by building a loading feature for websites, and update the user on the progress of a request.