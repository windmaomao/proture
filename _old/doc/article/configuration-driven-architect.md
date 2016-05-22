# Configuration Driven Architect

A new project or prototyping project requires quite a bit pipe work holding the foundation of the architect. During the refining process of the business logic and representation, idea changes rapidly, pages come and go on-the-fly. We'd love to mess with these pipes, since we understand research and experimentation pays for itself.

## Creativity meets reality

Suppose you are experimenting building a house, you have to knock down a room and build another one on-the-fly. And you want to be efficient doing this step. About the stage that you are going to settle with an architect, you should spend some time on laying down the blueprint, documenting effectively and accurately so that someone else can help you achieve the result in the future. Not to mention that someone could be yourself tomorrow.

In building website (or any software related business), we call this blueprint the configuration file. And back in Windows 95, it is the file with extension `.ini`, where it looks like

```
house = NEW ONE
rooms = 5
bathrooms = 3
```

Here we'd like to build a "NEW ONE" house with 5 rooms and 3 bathrooms. The architect has been designed to understand these instructions and will build it for you right away. In case if we want to support the detail of the room, we just need to extend the architect and export more room settings to this configuration file.

Smart as you are, you don't want to remember every detail of the room parameters. The configuration file serves as a higher level material to identify our intention and execution plan.

## Configuration network

These days blueprints come from different departments, and each department carries slight different dictionary. Therefore to drive the design in each department, we'll end up with multiple configuration files.

```
foundation.ini
utility.ini
room.ini
```

In order to adjust the house, ex. adding a feature room, what you will do after you grab a coffee is to open all these blueprints one by one, and evaluate the task by going over the current design. And after you put some thoughts and possible adjustment and ready to put it into execution, you'll go over these blueprints again and only this time adjust settings.

In web application business, the execution of adjusting settings (via so called `build`) is pretty quick. If all builds are running, one change of the configuration settings can propagate to the rest of the system under seconds to minutes. You can still enjoy the built (prototype) product in your browser with hot coffee.

Depending on how many components you are assembling, you might end up with multiple configuration files scattered in multiple locations (or different file system). In that case, you'll need to write a documentation for the entire project stating the specific activity workflow via these configurations. Of course, you could have multiple workflows as well.

## Summary

We are getting comfortable putting our idea on a piece of specification that a computer understands. It'll be more and more common for us to write configurations over computer language, even for developers.

### Personal Note
I went to the office today, and sat down, opened and edited 'swagger.json', 'tech.js', 'ng-admin.js', all of them are configuration files handling spec, model, and ui separately. I refreshed the browser. What I can tell you after that is, I can't enjoy more about my hard work for the last couple weeks.
