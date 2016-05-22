#Sharing header/footer in Angular application

AngularJS has build-in pattern to share visual/non-visual components for multiple applications, ex. module or directive.

I'd like to investigate or study a bit of codes that we have written in the past so to answer the following questions.

1. why so far we haven't written a shared header between applications
2. how much effort is needed to achieve this sharing


##Look and Feel
```

    <div ng-if="user.ready">
        <div class="header">
            <div ui-view="header"></div>
        </div>
        <div class="body">
            <div ui-view></div>
        </div>
        <div class="footer">
            <div ui-view="footer"></div>
        </div>
    </div>

```

Within each app, we tend to use a template (above code, copied from view under layout.html from dbVals UI) to capture the header and footer region to minimize the copy and paste work. 

There's no much need within one application to write a header component, mainly because the look and feel can be coded in its own HTML, and CSS (and Javascript if any) once. 

##Layout

AngularJS directive allows us create a header directive with unique look and function. For dynamic data coming from the server, ex. menu items, we can embed a separate API to grab the data. However we also need separate error handling, so the list can go on and on. Therefore it seems better to have these functions written outside of the directive and give their controls back to the main application. For instance, populating the menu, redirecting upon errors, and authorization control. This actually makes more sense, since each app can (and will) have different logic for these functions. 

On top of writing the header as a directive, we also need to create a menu directive. And afterwards, we could implement a service to orchestrate them, ex. loading header, loading menu etc. This service serves very similar role as layout, which is not a sharable component, since as we mentioned the logic and workflow is always different for different applications. We just want to have a service pattern, while sharing the implementation of header, menu directives and etc.

The workflow can be something like the following (copied from authRoute module under auth.js from dbVals UI). 

```

        this.connect = function() {
            return auth.login()                
                .then(this.menu)		// get menu
                .then(this.active)		// check user status
                .then(this.entity)		// get user entity info
                .then(this.user)		// store user
                .catch(this.reject)		// catch error and redirect
            ;
        };

``` 

   
##Summary

We can build multiple reusable units for UI, and then wire them together through a centralized service which can communicate with these units. And this service can have its own unique workflow and implementations for each application while sharing UI components. 