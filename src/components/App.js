import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from 'pages';
import Base from 'containers/common/Base';
import MainScreen from './MainScreen';
import Blog from './Blog/Blog';
import GrommetWorldMap from './GrommetWorldMap';
import VideoPage from './videos/video';
import GPS from './gps/gps';

const App = () => {
    return (
        <div>
            {/* <Navigators/> Nav*/}
            <Switch>
                <Route exact path="/" component={MainScreen}/>
                <Route path="/blog/" component={Blog}/>
                <Route path="/maps/" component={GrommetWorldMap}/>
                <Route path="/page/" component={ListPage}/>
                <Route path="/page/:page" component={ListPage}/>
                <Route path="/tag/:tag/:page?" component={ListPage}/>
                <Route path="/post/:id" component={PostPage}/>
                <Route path="/editor" component={EditorPage}/>
                <Route path="/video/" component={VideoPage}/>
                <Route path="/gps/" component={GPS}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Base/>
        </div>
    );
};

export default App;