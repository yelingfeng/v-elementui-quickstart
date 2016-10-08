import "./App.css"
import {mapGetters} from "vuex"
export default {
    name: "app",
    computed: mapGetters({
        itemData: 'getOneMenu'
    }),
    methods: {
    },
    components: {},
    render(h) {
        return (
            <div id="app" >
                <div class="header-wapper">
                    <header class="header header-fixed">
                        <div class="container">
                            <h1><a href="javascript:;">ElementUI-QuickStart</a></h1>
                            <ul class="nav">
                                {
                                    this.itemData.map((item) => {
                                        return (
                                            <li class="nav-item">
                                                <router-link activeClass="active" to={`/${item.link}`} tag="a">
                                                    {item.name}
                                                </router-link>
                                            </li>    
                                        ) 
                                    })
                                }
                            </ul>
                        </div>
                    </header>
                </div>
                <div class="main-center">
                    <div class="page-container">
                        <transition name="fade" mode="out-in">
                            <router-view class="view"></router-view>
                        </transition>
                    </div>
                </div>
            </div >
        )
    }
}
