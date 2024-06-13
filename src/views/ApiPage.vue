<template>
    <div>
        <v-app>
            <v-main>
                <v-container>
                    <div class="d-flex justify-center pa-4">
                        <v-btn color="primary" @click="fetchRandomMovie" class="pa-3">Get Random Movie</v-btn>
                    </div>

                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>

                    <v-data-table
                        :headers="headers"
                        :items="filteredMovies"
                        class="elevation-1"
                    >
                        <template v-slot:item.link="{ item }">
                            <a :href="item.link" target="_blank">{{ item.link || '-' }}</a>
                        </template>
                    </v-data-table>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            movies: [],
            headers: [
                { text: 'Title', value: 'title' },
                { text: 'Genre', value: 'genre' },
                { text: 'Director', value: 'director' },
                { text: 'Year', value: 'year' },
                { text: 'Rating', value: 'rating' },
                { text: 'Link', value: 'link' }
            ],
            search: ''
        };
    },
    computed: {
        filteredMovies() {
            if (!this.search) {
                return this.movies;
            }
            const searchLower = this.search.toLowerCase();
            return this.movies.filter(movie => {
                return Object.keys(movie).some(key => {
                    return String(movie[key]).toLowerCase().includes(searchLower);
                });
            });
        }
    },


    methods: {
        async fetchRandomMovie() {
            try {
                const response = await axios.get('http://localhost:3000/api/random-movie');
                this.movies.push(response.data);
            } catch (error) {
                console.error('Error fetching random movie:', error);
            }
        },
    },
};
</script>
