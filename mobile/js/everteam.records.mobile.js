window.onload = function () {
	var pageWidth = $(window).width();
	//alert(pageWidth);
}
	
	
	var nav           = $('nav');
	var menu          = $('.menu');
	var menuContainer = $('.menu-container');
	var toggle        = $('.toggle');
	var subToggle     = $('.has-children span');
	var shortcuts 	  = $('.shortcuts');
	var shortcutsMenu = $('.shortcuts-menu');
	var avatar 	  	  = $('.avatar');
	var avatarMenu 	  = $('.avatar-menu');
	var contextMenu	  = $('.button-plus-container');
	var recordTypeAdminMenu 	= $('.record-type-admin-menu');
	var recordTypeAdminMenuIcon = $('.record-type-admin-menu-icon');
	
	// Home icon
	$("div.header-cell:first-child img").on("click", function() {
		window.open("index.html","_self");
	});
	
	$(".close-menu").on("click", function( event ) {
		event.stopPropagation();
		$(".shortcuts-menu").fadeOut();
		$(".grid-button").toggle();
		$(".avatar-menu").fadeOut();
		$(".shortcuts span").removeClass("expanded");
	});
	
	$(".overlay-charts").on("click", function() {
		contextMenu.toggleClass('overlay-charts-close');
		$('.context-menu-background').fadeToggle( "fast", function() {
			$('.context-menu-container').fadeToggle();
		});
	});

	$('.grid-button').on("click", function() {
		$(this).toggleClass('close');
		$('.context-menu-background').fadeToggle( "fast", function() {
			$('.context-menu-container').fadeToggle();
		});
	});

	// "My Shortcuts" animation
	shortcuts.on("click", function( event ) {
		event.stopPropagation();
		$(".grid-button").toggle();
		$(this).find("span").toggleClass("expanded");
		shortcutsMenu.fadeToggle();
	});

	// "My profile" animation
	avatar.on("click", function() {
		$('.avatar-menu span').toggleClass('active');
		$(".grid-button").toggle();
		avatarMenu.toggle();
	});
	avatarMenu.on("click", function() {
		avatarMenu.toggle();
		$('.avatar-menu span').toggleClass('active');
		$('.avatar').toggle();
		$(".grid-button").toggle();
	});
	
	//Sort by
	$('.sort-by-container').on("click", function( event ) {
		$(this).toggleClass('sort-by-container-active');
		$('.sort-by-container ul').toggle();
	});
	
	//Navigation
	$('.navigate').on("click", function( event ) {
		event.stopPropagation();
		var url_page = $(this).attr("cspage");
		if( url_page ) {
			window.open( $(this).attr("cspage") , "_self");
		}
	});
	
	//Record Type dropdown menu 
	$('.dropdown-icon').on("click", function( event ) {
		$(this).next('.dropdown-menu').fadeToggle();
	});
	$('.dropdown-menu').on("click", function( event ) {
		$(this).fadeToggle();
	});
	
	//Record type Modal Window	
	$('.button-save').on("click", function( event ) {
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
	});
	
	$('.result-list-icon-actions div:last-child').on("click", function( event ) {
	    event.stopPropagation();
		$(this).toggleClass('close');
		var icon_label = $(this).html();
		if(icon_label == "details") {
			$(this).html("close");
		} else {
			$(this).html("details");
		}
		$(this).parent().parent().next("tr").toggleClass("details-row-container-toggle");
	});

	$('.result-list-icon-actions div:first-child').on("click", function( event ) {
	    event.stopPropagation();
		$('.modal-record-history').fadeToggle();
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
	});
	
	$(".result-list-table table td input[type='checkbox']").on("click", function( event ) {
		$('div.context-menu-tools').toggleClass('context-menu-tools-open');
	});

	$(".icon-legalHold").on("click", function( event ) {
		$('.modal-record-legalHold').fadeToggle();
		$('.modal-record-add').hide();
		$('.modal-record-history').hide();
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
		$('div.context-menu-tools').toggleClass('context-menu-tools-open');
	});

    $(".button-create-record").on("click", function( event ) {
        $('.modal-record-legalHold').hide();
        $('.modal-record-add').show();
        $('.modal-record-history').hide();
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
        $('div.context-menu-tools').toggleClass('context-menu-tools-open');
    });

	
	$(".icon-view-facet").on("click", function( event ) {
		$(".result-list-table").fadeToggle( "fast", function() {
			$(".result-list-facet").fadeToggle();
		});
	});
	
	/* Retention Rules */
	$(".retention-rules-edit").on("click", function( event ) {	
		$('.modal-retention-rule-create').hide();
		$('.modal-retention-rule-edit').show();
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
	});
	$(".button-plus-retention-rule").on("click", function( event ) {	
		$('.modal-retention-rule-edit').hide();
		$('.modal-retention-rule-create').show();
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
	});
	
	/* Legal Hold */
	$(".legal-hold-edit").on("click", function( event ) {	
		$('.modal-legal-hold-create').hide();
		$('.modal-legal-hold-edit').show();
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
	});
	$(".button-plus-legal-hold").on("click", function( event ) {	
		$('.modal-legal-hold-edit').hide();
		$('.modal-legal-hold-create').show();
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
	});

	/* CMIS connections */
    $(".button-plus-cmis-connections").on("click", function( event ) {    
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
    });
    
    $(".radio").on("click", function( event ) {
       $(".radio").removeClass("radio-on");
       $(this).toggleClass("radio-on");
    });
    
    $(".checkbox").on("click", function( event ) {
       $(this).toggleClass("checkbox-on");
    });


    /* Job Management */
    $(".job-management-create-button").on("click", function( event ) {    
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
    });
    
    /* Query builder */
    $(".item-menu-icon").on("click", function( event ) {
        event.stopPropagation();
       $(this).next(".item-menu-close").toggleClass("item-menu-open");
    });
    
    $(".item-menu-close ul li:first-child img").on("click", function( event ) {
        event.stopPropagation();
       $(this).parent().parent().parent().toggleClass("item-menu-open");
    });
    
    $(".icon-see-query-details").on("click", function( event ) {
        event.stopPropagation();
        $(this).parent().parent().parent().parent().parent().next("tr").toggleClass("details-row-container-toggle");
        $(this).parent().parent().toggleClass("item-menu-open");
    });
    
    $("table tr:nth-child(even)").on("click", function( event ) {
        $(this).next("tr").toggleClass("details-row-container-toggle");
        $(this).find(".result-list-icon-actions div:last-child").toggleClass("close");
    });
    
    $(".browser-frame-tree-view li").on("click", function( event ) {
        $(".browser-frame-explorer-innercontainer").fadeIn();
        $(".browser-frame-folder-detail-innercontainer").hide();
    });

    $(".browser-frame-explorer-innercontainer ul li").on("click", function( event ) {
        $('.archive-repository-step2').hide();
        $('.archive-repository-step3').hide();
        $('.archive-repository-step4').hide();
        $('.archive-repository-step1').show();
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
    });

    $(".browser-frame-folder-detail-header span").on("click", function( event ) {
        $('.archive-repository-step2').hide();
        $('.archive-repository-step3').hide();
        $('.archive-repository-step4').hide();
        $('.archive-repository-step1').show();
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
        
    });

    $(".browser-create-query-wizard-step1").on("click", function( event ) {
        $('.archive-repository-step1').fadeOut( "fast", function() {
            $('.archive-repository-step2').fadeIn();
        });
    });

    $(".browser-create-query-wizard-step2").on("click", function( event ) {
        $('.archive-repository-step2').fadeOut( "fast", function() {
            $('.archive-repository-step3').fadeIn();
        });
    });
    
    $(".browser-create-query-wizard-step3").on("click", function( event ) {
        $('.archive-repository-step3').fadeOut( "fast", function() {
            $('.archive-repository-step4').fadeIn();
        });
    });

    $(".folder-detail-label").on("click", function( event ) {
        event.stopPropagation();
        $('.browser-frame-explorer-innercontainer').fadeOut( "fast", function() {
            $('.browser-frame-folder-detail-innercontainer').fadeIn();
        });
    });
    
    $(".schedule-job-infos-icon").on("click", function( event ) {
        event.stopPropagation();
        $('.job-errors').hide();
        $('.job-details').fadeIn();
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
    });
    
    $(".job-errors-link").on("click", function( event ) {
        event.stopPropagation();
        $('.job-details').hide();
        $('.job-errors').fadeIn();
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
    });
    
    /* Analytics Search */
	
    $(".analyticssearch > input").focus(function() {
		$(this).val("");
	});
	
    $(".analyticssearch > input").on("keypress", function( event ) {
        window.open('analyticSearch.html','_self');
    });
    
    /* User management */
    $(".user-management-table img:nth-child(3)").on("click", function( event ) {
        $('.modal-affect-department').show();
        $('.modal-create-user').hide();
        $('.modal-background').fadeIn();
        $('.modal-container').fadeIn();
    });
    
    $(".button-plus-user-create").on("click", function( event ) {    
        $('.modal-affect-department').hide();
        $('.modal-create-user').show();
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
    });
    
    /* Department */
    $(".multiple-radio").on("click", function( event ) {
        var rt = $(this).attr("csrt");
        var radioList = document.getElementsByClassName("multiple-radio");
        for(var i=0 ; i<radioList.length ; i++) {
            if(radioList[i].getAttribute("csrt") == rt) {
                radioList[i].className = "multiple-radio";
            }
        }
        $(this).toggleClass("radio-on");
        //$("."+rt).removeClass("radio-on");
        //
    });

    

    