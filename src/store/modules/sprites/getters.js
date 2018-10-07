export var getters = {
    sprites: function (state) {
        return function (page) {
            var sprites = state.characters
                .concat(state.environment)
                .concat(state.interface)
                .concat(state.items);
            if (page) {
                return getPagedSprites(sprites, state.spritesPerPage, page);
            }
            return sprites;
        };
    },
    spritesInCategory: function (state) {
        return function (categoryName, page) {
            var sprites = state[categoryName].slice() || [];
            if (page) {
                return getPagedSprites(sprites, state.spritesPerPage, page);
            }
            return sprites;
        };
    },
    spriteWithID: function (state) {
        var sprites = state.characters
            .concat(state.environment)
            .concat(state.interface)
            .concat(state.items);
        return function (spriteID) {
            return sprites.filter(function (s) { return s.uuid === spriteID; })[0];
        };
    },
    itemsPerPage: function (state) {
        return state.spritesPerPage;
    },
    searchForSprite: function (state) {
        return function (keywords, page) {
            var sprites = state.characters
                .concat(state.environment)
                .concat(state.interface)
                .concat(state.items);
            var results = [], _keywords = keywords.split(' ');
            _keywords.forEach(function (keyword) {
                results = results
                    .concat(sprites.filter(function (s) { return s.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1; }))
                    .concat(sprites.filter(function (s) {
                    var tags = s.tags.join('|').toLowerCase().split('|');
                    return tags.indexOf(keyword.toLowerCase()) != -1;
                }));
            });
            if (page) {
                return getPagedSprites(results, state.spritesPerPage, page);
            }
            return results;
        };
    }
};
function getPagedSprites(sprites, spritesPerPage, page) {
    var start = spritesPerPage * (page - 1);
    return (sprites) ? sprites.splice(start, spritesPerPage) : [];
}
export default getters;
//# sourceMappingURL=getters.js.map