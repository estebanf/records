

# properties file for ant build 
# version : $Revision: 1.2 $
#
email=xxxx@everteam.com
javaversion=17

#
# for building issue
#
# tomcat_dir=/user/local/tomcat # deprecated use tomcat_lib instead because tomcat6 got ./lib and tomcat5 ./common/lib
tomcat_lib=/user/local/tomcat7/lib

#
# target name can be
#    cvs_export        : to create war and ear file from es projects and optionnaly other projects in different CVSROOT
#    cvs_export_all    : like cvs_checkout but only checkout all file and stop (CVS dir included)
#    cvs_createproject : create a new skeleton project in the repository
#
targetname=cvs_createproject

#
# project_name will give the war name file
#
project_name=everteam_records_ui

#
# main_project if one of the service.* project like es for example
# usefull especially for creation new project
#
main_project=everteam_records_ui

#
# if askpass is defined equals to true password will be ask
# to use .cvspass file : set to false
#
askpass=false

#
# if buildgwt is defined equals to true build will build gwt module
#
buildgwt=false

#
# if builddoc=true javadoc and jsdoc will be build
#
builddoc=false

#
# code will be obfuscate or not
#
obfuscate=false

#
#
# If wantear property exist (true or false) il will create ear file
# 
# wantear=true

#
# for compatibility issue with previous version first service must be : es
#
service=everteam_records_ui

#
# any service must implement cvs_root, cvs_package and cvs_tag
#    cvs_root    : the CVSROOT to access source (sample: :pserver:aru@dufy:/user/source/sources_es)
#    cvs_package : the folder where source are stored : (sample: modules/eversuite or Projets/es_test)
#    cvs_tag     : TAG to extract, can be a TAG or a branch (sample: HEAD, evolutive_41, T410_03, etc.....)
#
service.everteam_records_ui.cvs_root=:pserver:xxx@dufy:/user/source/sources_es
service.everteam_records_ui.cvs_package=Projets/everteam_records_ui
service.everteam_records_ui.cvs_tag=HEAD
