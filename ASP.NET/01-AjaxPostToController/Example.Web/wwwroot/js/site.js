// Write your JavaScript code.


(function () {
    window.PlotPlan = window.PlotPlan || new PlotPlan();
    
    function PlotPlan() {

        var self = this;
        var addLinkUrl = "/Home/CreateLink";

        this.initialize = function(buttonNameSelector) {
            $(buttonNameSelector).click(self.addLink)
        };

        this.addLink = function () {
            var linkData = self.getLinkData();

            $.ajax({
                type: 'POST',
                url: addLinkUrl,
                data: linkData,
                dataType: 'json',
                success: self.onLinkAdded,
                failure: self.onError
            });
        };

        this.getLinkData = function() {
            var linkName = $('#linkName').val();

            return {
                Name: linkName,
                X: 5,
                Y: 6,
                Width: 7,
                Height: 8
            };
        };

        this.onLinkAdded = function(data) {
            if (data && data.isSuccess) {
                $('<div>').text('Link Added').appendTo($('#links'));
            } else {
                self.onError(data);
            }
        }

        this.onError = function(data) {
            $('<div>').text('Error Happened').appendTo($('#errors'));
        }
    }
})();