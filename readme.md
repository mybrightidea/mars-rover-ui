# Mars Rover UI

- This has been written in React with Redux store

- It calls the previously submitted library [here on github](https://github.com/mybrightidea/mars-rover)

## Redux store

The following data is maintained in the store:

    parameters {        // parameters passed to the solver
        name: "Rover",      // name of rover
        startX: 2,          // start X position of rover
        startY: 2,          // start Y position of rover
        orientation: "E",   // start orientation position of rover
        instructions: "",   // instructions to be processed by the rover
        maxX: 5,            // max X of plateau
        maxY: 5             // max Y of plateau
    },
    plateau: {          // a 2D array of size [maxX][maxY] holding the state of each position on the plateau
                        // switches used to render each cell by adding formatting css classes
                        // each orientation stored to make the code simpler at the point of rendering of the element

        [][]: {
          startCell: true,  // is the start cell
          endCell: false,   // is te ende cell
          visited: false    // has been visited
          north: false      // oriented north if visited
          east: true        // oriented east if visited
          south: false      // oriented south if visited
          west: false       // oriented west if visited
        }
    },
    result: {           // array of result of the calculation
        isAvailable: true  // flag to indicate result is available to be rendered
        maxX: 5            // limit of the plateau X
        maxY: 5            // limit of the plateau Y
        roverEndStates[]:  // Array of rover end states (array from legacy library, in UI example only one rover)
            {
                x: 1       // end x position of rover
                y: 1       // end y position of rover
                orientation:  // final orientation of rover
                maxX:       // maximum x value of path
                minX:       // minimum x value of path
                maxY:       // maximum y value of path
                minY:       // minimum y value of path
                path:[]:    // array of locations and orientations of each step taken
                    {
                        x:  // x coordinate of the step
                        y:  // y coordinate of the step
                        orientation: // orientation of rover at the step
                    }
            }
    }

## React Rendering

The following elements are rendered:

`<App>`

`--<Header>`

`----<Slider/> // max X slider`

`----<Slider/> // max Y slider`

`--</Header>`

`--<Body>`

`----<Plateau/> // rendering of the plateau`

`--</Body>`

`--<Footer>`

`----<Result/> // rendering of the result`

`--</Footer>`

`</App>`

Note: I added a trap to stop the rover wandering off the plateau: if the rover instruction would move it outside of the bounds then it is ignored

The page is served from a simple node/express server
