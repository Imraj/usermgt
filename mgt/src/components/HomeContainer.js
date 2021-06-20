import {React, useEffect, useState} from 'react';
//import axios from 'axios';

 function HomeContainer(){
    const [items, setItems] = useState(null);
    useEffect(()=>{
        fetchItems();
    }, []);
    const fetchItems = async () =>{
        const data = await fetch("/tweets")
        const items = await data.json()
        setItems(items)    
    }

    return(
        <div class="container">
            <div class="row">
                <div class="col-lg-12"> 
                    <div class="row">
                            <h4>Online Courses</h4>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="col-lg-4" ng-repeat="rc in home.randomCourses">
                                        <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h5 class="panel-title"> rc.university </h5>
                                        </div>
                                        <div class="panel-body">
                                                <p> rc.title</p>
                                                <span><a href="/course/rc._id">View</a></span>
                                        </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="cbp-l-loadMore-button">
                                    <a href="/write-a-review" class="cbp-l-loadMore-button-link">View More</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default HomeContainer;