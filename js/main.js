/* Author:

*/



$(document).ready(function() { $("#select").select2(); });









$(function(){
      $('#facebook').fbWall({
       id:'408567155846009',
       accessToken:'AAAC7gAoWDQ0BALAhBwvQ4aeLDKroNX54ivHgM9McYC5KS0Fc3gt8pmnyqwceflipZBjU2lCy7ywrkUj3IE0fbpNXwHZAE5XwPOVKrQ9gZDZD',
       avatarAlternative:   'avatar-alternative.jpg',
       avatarExternal:     'avatar-external.jpg',
       max:          1,
       showComments:     false,
       showGuestEntries:   false,
       translateAt:      '@',
       translateLikeThis:    'like this',
       translateLikesThis:   'likes this',
       translateErrorNoData: 'has not shared any information.',
       translatePeople:    'people',
       timeConversion:     12,
       useAvatarAlternative: false,
       useAvatarExternal:    false,



     });
    });



$(document).ready(function(){
    $('#tweetFeed').jTweetsAnywhere({
        username: 'Dynamicsltd',
        count: 1,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: true,
            showUserFullNames: true,
            showActionReply: true,
            showActionRetweet: true,
            showActionFavorite: true
        },
        
    });
});
