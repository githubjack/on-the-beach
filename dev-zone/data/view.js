
                        var output = '';
						for (var i=0; i<holidays.deals.length; i++){
							output +=("<li data-name='" +holidays.deals[i].name+ "' data-price='" +holidays.deals[i].price+  "' data-rate='" +holidays.deals[i].rating+  "' >");
                            output +=("<div class='hotel-data'>");
                            output +=("<div class='hotel-type'>" + "<h2>" +holidays.deals[i].name+ "<img src='" +holidays.deals[i].stars+ "'>" +"</h2>" );
                            output +=("<p>" +holidays.deals[i].location+ "</p></div>");
                            output +=("<div class='hotel-price'>");
                            output +=("price" );
                            output +=("<p>" +holidays.deals[i].price+ "</p>");
                            output +=("</div></div>");
                            
                            output +=("<figure><img src='" +holidays.deals[i].picture+ "'></figure>" );
                            
                            output +=("<div class='hotel-booking-container'><div class='hotel-bookings'>");
                            output +=("<div class='itinery'>");
                            output +=("<p><span>" +holidays.deals[i].departure+ " <span>" +holidays.deals[i].duration+ "</span>");
                            output +=("<span> " +holidays.deals[i].airport+ "</span>" + "<span>" +holidays.deals[i].people+ "</span>");
                            output +=("</div>");
                            output +=("<div class='control'><p><button class='button filters-btn ' ></button></p></div>");
                            output +=("</div></div>");
                            
                            
                            output +=("<div class='summary filters-panel filters-hide' >" +holidays.deals[i].summary+
							"<button class='book-now'> book now </div>");
                            output +=("</li>");
							document.getElementById('sort-list').innerHTML = output;
         
        }