import React from 'react'
import PropTypes from 'prop-types';

const mixCard = ({data}) => {
    return (
        <div>
            {data.map(item => (
                <div class="flex rounded-lg h-full w-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3 h-24">
                  <div
                    class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                    <img :src="card.imgUrl" alt="">
                  </div>
                  <div class="flex justify-between w-full">
                    <h2 class="text-gray-900 text-lg title-font font-medium">{{card.Title}}</h2>
                    <h3 class="text-right text-gray-700">Mixed by <br>{{card.MixedBy}} </h3>
                  </div>
                </div>
                <div class="flex-grow flex flex-col justify-between">
                  <p class="leading-relaxed text-base">
                    <em>{{card.Description}}</em>
                    <br><br>
                  </p>
                  <div> 
                   <span class="text-center w-full"><strong v-if="card.tracklist"> Tracklist:</strong></span>
                     <ol>
                       <li v-for="track in card.tracklist" :key="track" class="list-disc list-inside ">{{track}}</li>
                     </ol>
                  </div>
                  <a :href="card.Link" target="_blank" class="w-auto mt-3 hover:text-gray-900 text-yellow-700 inline-flex items-center">Stream
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </div>
    )
}

mixCard.propTypes = {
    data: PropTypes.object,
  };

export default mixCard
