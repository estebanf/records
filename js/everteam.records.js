
	
	
	var nav           = $('nav');
	var menu          = $('.menu');
	var menuContainer = $('.menu-container');
	var toggle        = $('.toggle');
	var subToggle     = $('.has-children span');
	var shortcuts 	  = $('.shortcuts');
	var shortcutsMenu = $('.shortcuts-menu');
	var avatar 	  	  = $('.avatar div');
	var avatarMenu 	  = $('.avatar-menu');
	var contextMenu	  = $('.button-plus-container');
	var recordTypeAdminMenu 	= $('.record-type-admin-menu');
	var recordTypeAdminMenuIcon = $('.record-type-admin-menu-icon');
	
	// Toggle menu
	toggle.on("click", function() {
	  nav.toggleClass('is-visible');
	  if(menu.hasClass('visually-hidden')) {
		menu.toggleClass('visually-hidden is-visible')
	  } else {
		menu.removeClass('is-visible');
		// Wait for CSS animation
		setTimeout(function() {
		  menu.addClass('visually-hidden');
		}, 200);
	  }
	});

	// "My Shortcuts" animation
	shortcuts.on("click", function() {
		shortcuts.fadeOut( "fast", function() {
			shortcutsMenu.fadeIn();
		});	
	});
	shortcutsMenu.on("click", function() {
		shortcutsMenu.fadeOut( "fast", function() {
			shortcuts.fadeIn();
		});	
	});

	// "My profile" animation
	avatar.on("click", function() {
		$('.avatar').toggle();
		$('.avatar-menu span').toggleClass('active');
		avatarMenu.toggle();
	});
	avatarMenu.on("click", function() {
		avatarMenu.toggle();
		$('.avatar-menu span').toggleClass('active');
		$('.avatar').toggle();
		$(".switch-department").animate({
			opacity: 0,
			top:"200px"
		}, 250, function() {
		});	
	});
	
	//Switch departement
	$(".switch-department-link").hover( function() {
		$(".switch-department").animate({
			opacity: 1,
			top:"25px"
		}, 300, function() {
		});	
	});
	
	// Contextual "+" Menu
	contextMenu.on("click", function() {
		contextMenu.toggleClass('button-plus-close');
		$('.context-menu-background').fadeToggle( "fast", function() {
			$('.context-menu-container').fadeToggle();
		});
	});
	
	//Sort by
	$('.sort-by-container').on("click", function( event ) {
		$(this).toggleClass('sort-by-container-active');
		$('.sort-by-container ul').toggle();
	});
	
	//View selection
	$('.select-view-type').on("change", function( event ) {
		if( $(this).val() == "List") {
			$('.record-type-container').fadeOut( "fast", function() {
				$('.record-type-container-list').fadeIn();
			});				
		}
		if( $(this).val() == "Tile") {
			$('.record-type-container-list').fadeOut( "fast", function() {
				$('.record-type-container').fadeIn();
			});				
		}

	});

	$(".record-type-container-list table input[type='button']").on("click", function( event ) {
		window.open('recordTypeSearch.html','_self');
	});
	
	//Record Type Admin Menu
	recordTypeAdminMenuIcon.on("click", function( event ) {
		event.stopPropagation();
		$(this).next(recordTypeAdminMenu).fadeToggle("fast");
		$(this).toggleClass('record-type-admin-menu-icon-close');
	});
	
	//Navigation
	$('.navigate').on("click", function( event ) {
		event.stopPropagation();
		var url_page = $(this).attr("cspage");
		if( url_page ) {
			window.open( $(this).attr("cspage") , "_self");
		}
	});

	$('.logo').on("click", function( event ) {
		window.open("splash.html","_self");
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

	$(".result-list-user-table table td input[type='checkbox']").on("click", function( event ) {
		var checkboxCheckedList = $(".result-list-user-table table td input[type='checkbox']:checked").length;
		if (checkboxCheckedList == 0) {
			$('div.context-menu-tools').removeClass('context-menu-tools-open');
		} else {
			$('div.context-menu-tools').addClass('context-menu-tools-open');
		}
	});
	
	$(".result-list-user-table table th input[type='checkbox']").on("click", function( event ) {
		if ( $(this).is(":checked") ) {
			$(".result-list-user-table table td input[type='checkbox']").prop("checked", true);
			$('div.context-menu-tools').addClass('context-menu-tools-open');
		} else {
			$(".result-list-user-table table td input[type='checkbox']").prop("checked", false);
			$('div.context-menu-tools').removeClass('context-menu-tools-open');
		}
	});
	
	$(".icon-userdepartment").on("click", function( event ) {
		$('div.context-menu-tools').removeClass('context-menu-tools-open');
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
		$(".result-list-facet").toggleClass('result-list-facet-collapsed',400).promise().done(function(){
			$('.result-list-table').toggleClass('result-list-table-expanded');
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
    
    $(".result-list-user-icon-actions").on("click", function( event ) {
        $(this).parent().next("tr").toggleClass("details-row-container-toggle");
        $(this).find("div").toggleClass("close");
		if( $(this).find("div").hasClass("close") ) {
			$(this).find("div").html("close");
		} else {
			$(this).find("div").html("edit");
		}
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
	
    $(".browser-create-query-wizard-step4_1").change(function() {
        $('.archive-repository-step3').fadeOut( "fast", function() {
            $('.archive-repository-step5_1').fadeIn();
        });
    });
	
    $(".browser-create-query-wizard-button-step4_1").click(function() {
        $('.archive-repository-step4').fadeOut( "fast", function() {
            $('.archive-repository-step5_1').fadeIn();
        });
    });
	
    $(".browser-create-query-wizard-step4_2").on("click", function( event ) {
        $('.archive-repository-step3').fadeOut( "fast", function() {
            $('.archive-repository-step5_2').fadeIn();
        });
    });
	
    $(".browser-create-query-wizard-step5_2").on("click", function( event ) {
		$('.archive-repository-step5_1').hide();
		$('.archive-repository-step5_2').hide();
        $('.archive-repository-step6').fadeIn();
    });
	
    $(".browser-create-query-wizard-step5_1").on("click", function( event ) {
		$('.archive-repository-step5_1').hide();
		$('.archive-repository-step5_2').hide();
        $('.archive-repository-step7').fadeIn();
		setTimeout("document.getElementById('archive_repository_step7').innerHTML = 'Done !';","2000");
    });

    $(".browser-create-query-wizard-step6").on("click", function( event ) {
		$('.archive-repository-step6').hide();
        $('.archive-repository-step7').fadeIn();
		setTimeout("document.getElementById('archive_repository_step7').innerHTML = 'Done !';","2000");
    });

    $(".check-all").on("click", function( event ) {
        $( this ).siblings().addClass('checkbox-on');
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
    $(".analyticssearch > input").on("keypress", function( event ) {
        window.open('analyticSearch.html','_self');
    });
    
    /* User management */
    $(".input-text-filter-user").on("focus", function( event ) {
		$(this).val("");
    });
	
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

    $(".button-user-set-department").on("click", function( event ) {    
		window.open("departmentManagement.html","_self");
    });
	
    $(".button-create-user").on("click", function( event ) {
		$('.affect-user-modal').hide();
        $('.modal-record-add').show();
        $('.modal-background').fadeToggle();
        $('.modal-container').fadeToggle();
    });

    $(".icon-userdepartment").on("click", function( event ) {
		$('.affect-user-modal').show();
        $('.modal-record-add').hide();
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
	
	//Change password
	$('.change-password-button').on("click", function( event ) {
		$('.modal-background').fadeToggle();
		$('.modal-container').fadeToggle();
	});


    

    