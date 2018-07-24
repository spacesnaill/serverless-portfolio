import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example",
        'href': "http://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nulla porttitor massa id neque.",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Portfolio Boilerplate",
        'href': "http://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nulla porttitor massa id neque.",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example",
        'href': "http://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nulla porttitor massa id neque.",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
            https://www.flickr.com/photos/37287295@N00/2540855181`
        }
    }
];

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));