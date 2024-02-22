<template>
    <header class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light d-md-block bg-white sidebar collapse" id="sidebarMenu">
            <div class="container-fluid">
                <div class="row w-100">

                    <div class="logo col-md-1 d-flex align-items-start ms-1">
                        <button @click="toggleSidebar" class="btn d-sm">
                            <span class="toggle-icon"></span>
                        </button>

                        <div class="d-flex ms-3">
                            <img src="/assets/images/icon.png" width="35px" height="35px" alt="">
                            <h4>YouTube</h4>
                            <div class="text-above">ID</div>
                        </div>
                    </div>


                    <div class="col-sm-8 text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="input-group">
                                        <input type="text" v-model="search" @keyup="searchKategori" class="form-control"
                                            placeholder="Telurusi">
                                        <span class="input-group-text" id="basic-addon1"><font-awesome-icon
                                                icon="search" /></span>
                                    </div>
                                </div>
                                <div class="col-md-2 mic mt-1">
                                    <button class="btn btn-lg btn-light rounded-5"><font-awesome-icon
                                            icon="microphone" /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm-2 ms-3 d-flex text-end">
                        <button class="btn btn-lg text-muted rounded-5"><font-awesome-icon icon="video" /></button>
                        <button class="btn btn-lg text-muted rounded-5"><font-awesome-icon icon="bell" /></button>
                        <button class="btn btn-lg  rounded-5"><font-awesome-icon icon="user" /></button>
                    </div>

                </div>

            </div>
        </nav>
        <div class="highlight">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-md-1">
                        <div class="position-sticky">
                            <div class="list-group">
                                <router-link to="/"
                                    class="list-group-item list-group-item-action d-flex flex-column align-items-center border-0 py-3">
                                    <font-awesome-icon icon="home" />
                                    <span class="mt-2">Beranda</span>
                                </router-link>
                                <router-link to="/"
                                    class="list-group-item list-group-item-action d-flex flex-column align-items-center border-0 py-3">
                                    <font-awesome-icon icon="play" />
                                    <span class="mt-2">Shorts</span>
                                </router-link>
                                <router-link to="/"
                                    class="list-group-item list-group-item-action d-flex flex-column align-items-center border-0 py-3">
                                    <font-awesome-icon icon="bookmark" />
                                    <span class="mt-2">Subscription</span>
                                </router-link>
                                <router-link to="/"
                                    class="list-group-item list-group-item-action d-flex flex-column align-items-center border-0 py-3">
                                    <font-awesome-icon icon="list" />
                                    <span class="mt-2">Anda</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-11">
                        <div class="kategori">
                            <router-link class="btn btn-light btn-md ms-3" to="/" exact
                                :class="{ 'btn-dark text-light': $route.path === '/' }">Semua</router-link>

                            <router-link class="btn btn-light btn-md ms-3" to="/musik"
                                :class="{ 'btn-dark text-light': $route.path === '/musik' }">Musik</router-link>

                            <router-link class="btn btn-light btn-md ms-3" to="/live"
                                :class="{ 'btn-dark text-light': $route.path === '/live' }">Live</router-link>

                            <router-link class="btn btn-light btn-md ms-3" to="/game"
                                :class="{ 'btn-dark text-light': $route.path === '/game' }">Game</router-link>

                            <router-link class="btn btn-light btn-md ms-3" to="/berita"
                                :class="{ 'btn-dark text-light': $route.path === '/berita' }">Berita</router-link>

                            <router-link class="btn btn-light btn-md ms-3" to="/kartun"
                                :class="{ 'btn-dark text-light': $route.path === '/kartun' }">Kartun</router-link>


                            <router-link class="btn btn-light btn-md ms-3" to="/baru"
                                :class="{ 'btn-dark text-light': $route.path === '/baru' }">Baru diupload</router-link>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>
<script>

export default {
    name: 'Navbar',

}
</script>