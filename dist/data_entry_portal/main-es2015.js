(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+hgv":
/*!************************************************!*\
  !*** ./src/app/tracking/tracking.component.ts ***!
  \************************************************/
/*! exports provided: TrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingComponent", function() { return TrackingComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TrackingComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Unit List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TrackingComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackingComponent_div_23_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onClickShowProgram(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Change Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Program_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", Program_r4.program_icon, " font-22 avatar-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Program_r4.program);
} }
function TrackingComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackingComponent_div_29_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const Program_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onClickSelectProgram(Program_r7.ProgramId, Program_r7.program, Program_r7.program_icon); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Program_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](Program_r7.program_icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Program_r7.program);
} }
function TrackingComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackingComponent_tr_48_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const el_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.getTable(el_r10.location_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](el_r10.location_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](el_r10.total_baseline_tested);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](el_r10.total_endline_tested);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", el_r10.total_school, " ");
} }
class TrackingComponent {
    constructor(spinner, _router, _service, route) {
        this.spinner = spinner;
        this._router = _router;
        this._service = _service;
        this.route = route;
        this.elements = [];
        this.ProgramData = [];
        this.Action_button = [];
        this.programName = '';
        this.filter_type = "national";
        this.filter_type_val = "national";
        this.filter_value = 25;
        this.route.params.subscribe(event => {
            this.programId = event.program_id;
            this.project = localStorage.getItem('project');
        });
    }
    onPopState(event) {
        setTimeout(() => {
            let history = localStorage.getItem('history');
            console.log(history);
            if (history == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    title: 'Logout',
                    text: 'Are you sure you want to logout?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Logout!',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.value) {
                        this.logout();
                    }
                    else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.DismissReason.cancel) {
                    }
                });
            }
            this._router.navigate([`unitlist`]);
            localStorage.setItem('history', '');
        }, 50);
    }
    ngOnInit() {
        //this.getTable();
        /** spinner starts on init */
        this.spinner.show();
        this.getProgram();
        this.username = localStorage.getItem("name");
        this.is_tracker = localStorage.getItem("is_tracker");
    }
    getProgram() {
        this.spinner.hide();
        this.Program = JSON.parse(localStorage.getItem("Program"));
        return this.Program;
    }
    btoaFunction(id) {
        return btoa(id);
    }
    getTable(filter_value) {
        console.log(this.filter_type_val);
        $('#tracking_list').DataTable().destroy();
        this.programId = JSON.parse(localStorage.getItem("programId"));
        if (this.filter_type_val == "national") {
            this.filter_type = "national";
            $("#location_tittle").text("State Name");
        }
        else if (this.filter_type_val == "state") {
            this.filter_type = "state";
            $("#location_tittle").text("District Name");
        }
        else if (this.filter_type_val == "district") {
            this.filter_type = "district";
            $("#location_tittle").text("Block Name");
        }
        else if (this.filter_type_val == "block") {
            this.filter_type = "block";
            $("#location_tittle").text("Cluster Name");
        }
        else if (this.filter_type_val == "cluster") {
            this.filter_type = "cluster";
            $("#location_tittle").text("School Name");
        }
        let tempthis = this;
        this.servername = 'https://gp.prathamapps.com/3.0/index.php/Tracking_report/dataentrytracker';
        $.ajax({
            method: "POST",
            url: this.servername,
            type: "json",
            data: { "filter_value": filter_value, "filter_type": this.filter_type, "program_id": this.programId }
        })
            .done(function (msg) {
            if (msg['status'] != 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
            }
            else {
                if (msg['data'] == '') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                        icon: 'warning',
                        title: '',
                        text: 'No Units Available!'
                    });
                    //$('#id_unit_tabel').hide();
                }
                else {
                    if (tempthis.filter_type == 'national') {
                        tempthis.filter_type_val = 'state';
                    }
                    else if (tempthis.filter_type == 'state') {
                        tempthis.filter_type_val = 'district';
                    }
                    else if (tempthis.filter_type == 'district') {
                        tempthis.filter_type_val = 'block';
                    }
                    else if (tempthis.filter_type == 'block') {
                        tempthis.filter_type_val = 'cluster';
                    }
                    $('#id_tracking_tabel').show();
                    console.log(msg['data']);
                    tempthis.elements = msg['data'];
                    setTimeout(() => {
                        $("#tracking_list").DataTable({
                            destroy: true,
                            language: {
                                paginate: {
                                    previous: "<i class='mdi mdi-chevron-left'>",
                                    next: "<i class='mdi mdi-chevron-right'>"
                                }
                            },
                            drawCallback: function () {
                                $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                            }
                        });
                    }, 1000);
                }
            }
        });
    }
    onClickSelectProgram(ProgramId, program, program_icon) {
        console.log(ProgramId);
        this.spinner.show();
        this.BlockId = JSON.parse(localStorage.getItem("BlockId"));
        localStorage.setItem("programId", ProgramId);
        let hasAction = true;
        this.programName = program;
        this.Program.forEach(val => {
            if (val.ProgramId == ProgramId) {
                if (val.action_key != null) {
                    val.action_key.forEach(v => {
                        this.Action_button.push(v);
                    });
                }
                else {
                    hasAction = false;
                }
            }
        });
        if (hasAction == true) {
            this.getTable(this.filter_value = this.BlockId);
            this.programId = ProgramId;
            this.ProgramData = [{ ProgramId: ProgramId, program: program, program_icon: program_icon }];
            localStorage.setItem('history', this.programId);
            $('#id_program_row').hide();
            //$('#id_unit_tabel').show();
            $('#id_program_selected').show();
            this.spinner.hide();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No Forms Ready For This Programme'
            });
        }
    }
    onClickShowProgram() {
        this.Action_button = [];
        //$('#remove_action').innerHTML = '';
        window.location.reload();
        $('#id_tracking_tabel').hide();
        $('#id_program_row').show();
        $('#id_program_selected').hide();
        localStorage.setItem('history', '');
    }
    onPageRedirect(response, action) {
        console.log(response);
        let formData = {};
        formData['state_id'] = response.StateId;
        formData['state_name'] = response.StateName;
        formData['district_id'] = response.DistrictId;
        formData['district_name'] = response.PrathamDistrictName;
        formData['brg_id'] = response.BrgId;
        formData['teacher_name'] = response.BrgName;
        formData['unit_code'] = response.UnitCode;
        formData['unit_name'] = response.UnitName;
        formData['block_id'] = response.BlockId;
        formData['block_name'] = response.PrathamBlockName;
        formData['program'] = response.Program;
        formData['program_id'] = response.ProgramId;
        formData['unit_id'] = response.UnitId;
        formData['village_id'] = response.VillageId;
        formData['dise_code'] = response.DISECode;
        this.passdata = action;
        //sessionStorage.setItem('form_data',JSON.stringify(formData))
        //localStorage.setItem('form_data',JSON.stringify(formData));
        const url = this._router.createUrlTree([`data-entry/${this.programName}/${this.passdata}`]);
        localStorage.setItem(this.programName + '/' + this.passdata, JSON.stringify(formData));
        window.open(url.toString(), '_blank');
        //this._router.navigateByUrl(url.toString(),  { state: formData });
    }
    logout() {
        this._service.logout();
        this._router.navigate([`login`]);
    }
}
TrackingComponent.ɵfac = function TrackingComponent_Factory(t) { return new (t || TrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrackingComponent, selectors: [["app-tracking"]], hostBindings: function TrackingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("popstate", function TrackingComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 56, vars: 5, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, "logo-box"], ["href", "index-2.html", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54"], [1, "list-unstyled", "topnav-menu", "float-right", "mb-0", 3, "ngModel"], [1, "dropdown", "notification-list"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "false", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "nav-user", "mr-0", "waves-effect", "waves-light", 2, "color", "#fabc09"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "fa-2x"], [1, "pro-user-name", "ml-1"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right", "profile-dropdown"], ["href", "/unitlist", "class", "dropdown-item notify-item cursor-pointer", 4, "ngIf"], [1, "dropdown-item", "notify-item", "cursor-pointer", 3, "click"], [1, "fe-log-out"], [1, "content-page"], [1, "content"], [1, "container-fluid", "pt-3"], ["id", "id_program_selected", 1, "row", 2, "display", "none", 3, "ngModel"], ["class", "col-md-3 col-sm-4", 4, "ngFor", "ngForOf"], ["id", "id_program_row", 1, "row", 3, "ngModel"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row"], ["id", "id_tracking_tabel", 1, "row", 2, "display", "none"], [1, "card", "pb-3"], [1, "card-title", "mb-3"], ["id", "tracking_list", 1, "table", "nowrap", "table-striped", "table-bordered"], [1, "thead-dark"], ["scope", "col", "id", "location_tittle"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "footer"], [1, "container-fluid"], [1, "col-md-6"], ["href", "#"], ["href", "/unitlist", 1, "dropdown-item", "notify-item", "cursor-pointer"], [1, "fe-line-chart"], [1, "col-md-3", "col-sm-4"], [1, "widget-rounded-circle", "card-box"], [1, "col-4"], [1, "avatar-lg", "rounded-circle", 2, "background-color", "rgba(250, 188, 9, 0.1)"], [2, "color", "#fabc09"], [1, "col-8"], [1, "text-right"], [1, "text-dark", "mt-1"], ["data-plugin", "counterup"], ["href", "javascript:void(0)", 3, "click"], [1, "text-muted", "mb-1", "text-truncate"], [1, "wrimagecard", "wrimagecard-topimage"], [1, "wrimagecard-topimage_header"], [1, "wrimagecard-topimage_title"], ["scope", "row"]], template: function TrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModel", function TrackingComponent_Template_ul_ngModel_6_listener() { return ctx.username; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TrackingComponent_a_14_Template, 4, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrackingComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModel", function TrackingComponent_Template_div_ngModel_22_listener() { return ctx.ProgramData; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TrackingComponent_div_23_Template, 14, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModel", function TrackingComponent_Template_div_ngModel_24_listener() { return ctx.Program; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TrackingComponent_div_29_Template, 8, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Data Entry Tracking Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "thead", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Location Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "BL Tested");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "EL Tested");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Total School");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TrackingComponent_tr_48_Template, 10, 4, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "footer", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " 2022 \u00A9 Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Pratham");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_tracker == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ProgramData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Program);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.elements);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);\r\n    padding: 0 10px 0 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    height: 70px;\r\n    z-index: 100;\r\n    padding-left: 30px !important;\r\n    border-bottom: 3px solid #FFC000;\r\n    }\r\n\r\n    .footer_link[_ngcontent-%COMP%] {\r\n    color: #FFC000;\r\n    }\r\n\r\n    .wrimagecard[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        margin-bottom: 1.5rem;\r\n        text-align: left;\r\n        position: relative;\r\n        background: #fff;\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        transition: all 0.3s ease;\r\n    }\r\n\r\n    .wrimagecard[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-size: 70px;\r\n    }\r\n\r\n    .wrimagecard-topimage_header[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    text-align: center;\r\n    background-color:rgba(250, 188, 9, 0.1);\r\n    color:#fabc09;\r\n    }\r\n\r\n    a.wrimagecard[_ngcontent-%COMP%]:hover, .wrimagecard-topimage[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);\r\n    }\r\n\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n\r\n    .wrimagecard-topimage_title[_ngcontent-%COMP%] {\r\n        padding: 20px 24px;\r\n        height: 80px;\r\n        padding-bottom: 0.75rem;\r\n        position: relative;\r\n    }\r\n\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        border-bottom: none;\r\n        text-decoration: none;\r\n        color: #525c65;\r\n        transition: color 0.3s ease;\r\n    }\r\n\r\n    .tablecard[_ngcontent-%COMP%]{\r\n        background: rgba(250, 188, 9, 0.1);\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        margin-bottom: 50px;\r\n\r\n    }\r\n\r\n    .content-page[_ngcontent-%COMP%]{\r\n  margin-left: 0px !important;\r\n}\r\n\r\n    .footer[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n    right: 0 !important;\r\n    left: 0px !important;\r\n}\r\n\r\n    .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: #98a6ad;\r\n    background-color: #323a46;\r\n    border-color: #424c5c;\r\n}\r\n\r\n    .cursor-pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBRXRCLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDOztJQUVBO0lBQ0EsY0FBYztJQUNkOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrREFBa0Q7UUFDbEQsa0JBQWtCO1FBQ2xCLHlCQUF5QjtJQUM3Qjs7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUNBO0lBQ0EsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiOztJQUNBO1FBQ0ksOENBQThDO0lBQ2xEOztJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO0lBQ2xCOztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCOztJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsMkJBQTJCO0lBQy9COztJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDLGtEQUFrRDtRQUNsRCxrQkFBa0I7UUFDbEIsbUJBQW1COztJQUV2Qjs7SUFHSjtFQUNFLDJCQUEyQjtBQUM3Qjs7SUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztJQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0lBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InRyYWNraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWN1c3RvbSB7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMzODQxNGE7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxNTQsMTYxLDE3MSwuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2JhKDE1NCwxNjEsMTcxLC4xNSk7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZGQzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyX2xpbmsge1xyXG4gICAgY29sb3I6ICNGRkMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLndyaW1hZ2VjYXJke1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTJweCAxNXB4IDIwcHggMHB4IHJnYmEoNDYsNjEsNzMsMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQgLmZhe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQtdG9waW1hZ2VfaGVhZGVye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTAsIDE4OCwgOSwgMC4xKTtcclxuICAgIGNvbG9yOiNmYWJjMDk7XHJcbiAgICB9XHJcbiAgICBhLndyaW1hZ2VjYXJkOmhvdmVyLCAud3JpbWFnZWNhcmQtdG9waW1hZ2U6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IDBweCByZ2JhKDQ2LDYxLDczLDAuMik7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQtdG9waW1hZ2UgYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLndyaW1hZ2VjYXJkLXRvcGltYWdlX3RpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZC10b3BpbWFnZSBhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzUyNWM2NTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICAudGFibGVjYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxODgsIDksIDAuMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTJweCAxNXB4IDIwcHggMHB4IHJnYmEoNDYsNjEsNzMsMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbi5jb250ZW50LXBhZ2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUgLnRoZWFkLWRhcmsgdGgge1xyXG4gICAgY29sb3I6ICM5OGE2YWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzYTQ2O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDI0YzVjO1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Vikas\Angular_Project\iimpact\src\main.ts */"zUnb");


/***/ }),

/***/ "0Cur":
/*!**************************************************************!*\
  !*** ./src/app/custom-dropdown/custom-dropdown.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDropdownComponent", function() { return CustomDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CustomDropdownComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r1["option_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.checkifObjectReturnString(option_r1), " ");
} }
class CustomDropdownComponent {
    constructor(serverService) {
        this.serverService = serverService;
        this.unitData = {};
        this.dropResponse = [];
        this.isOptLang = false;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.tippyProps = {
            arrow: true,
            placement: 'top',
            theme: 'translucent'
        };
    }
    ngOnInit() {
        this.lang = localStorage.getItem('lang');
        this.program_id = localStorage.getItem('history');
        //console.log(this.lang);
        //console.log(this.elementData.element_data.options['option_name']['en']);
        // if(this.elementData.element_data.options['option_name'][this.lang]==undefined){
        //   this.isOptLang=false;
        // }
        //console.log(this.isOptLang);
        let url = this.elementData.element_data['data_url'];
        let parameters = this.elementData.element_data['data_paramters'];
        this.unitData = this.formData;
        //console.log(url);
        if (url != "" && url != undefined) {
            parameters['unit_id'] = this.unitData['unit_id'];
            this.serverService.fetchDropdownData(url, parameters).then((response) => {
                let options = '';
                //let res = {"data":[{"child_info_id":1,"child_id":1234,"location":22,"full_name":"Child","father_name":"Father","mother_name":"asas","gender":"1","dob":"2022-05-09","age":3,"age_group":3,"sit_yes_no":5,"sit_joining_date":"2022-05-09","child_in_last_year":7,"current_year_enrollment":12,"covered_in_readiness":18,"type_of_phone":20,"contact_number":"9956065246","creation_timestamp":"2022-05-09T10:13:20Z","last_modified":"2022-05-09T10:13:20Z","is_active":1},{"child_info_id":2,"child_id":11,"location":22,"full_name":"sd","father_name":"ssmn","mother_name":"jjsj","gender":"1","dob":"2022-05-10","age":4,"age_group":3,"sit_yes_no":6,"sit_joining_date":null,"child_in_last_year":9,"current_year_enrollment":15,"covered_in_readiness":18,"type_of_phone":21,"contact_number":"9978123456","creation_timestamp":"2022-05-10T05:41:19Z","last_modified":"2022-05-10T05:41:19Z","is_active":1}]};
                this.dropResponse = response.data;
                //this.dropResponse = response;
                this.dropResponse.forEach(element => {
                    let key = Object.keys(element);
                    //options += `<option value='${element[key[0]]}'>${element[key[1]]}</option>`
                    var option = $('<option />');
                    option.attr('value', element[key[0]]).text(element[key[1]]);
                    $('#' + this.elementData.element_id).append(option);
                });
                $('.selectpicker').selectpicker('refresh');
                //$("#"+ this.elementData.element_id).html(options).selectpicker('refresh').selectpicker('val','');
                // setTimeout(() => {
                //   $('.selectpicker').selectpicker('refresh');
                // }, 1500);
            }).catch((err) => {
                console.log(err);
            });
        }
        setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 1000);
    }
    dropDownChange(event) {
        let selected_id = $(event.target).val();
        let elementData = this.elementData.elementOptionDependent;
        let response = this.dropResponse;
        let element_id = this.elementData.element_id;
        let change_action = this.elementData.change_action;
        this.action.emit({ response, selected_id, element_id, change_action, elementData });
    }
    checkifObjectReturnString(option) {
        if (typeof option['option_name'] === 'object') {
            return option['option_name'][this.lang];
        }
        else {
            return option['option_name'];
        }
    }
}
CustomDropdownComponent.ɵfac = function CustomDropdownComponent_Factory(t) { return new (t || CustomDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"])); };
CustomDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomDropdownComponent, selectors: [["app-custom-dropdown"]], inputs: { elementData: "elementData", formData: "formData" }, outputs: { action: "action" }, decls: 6, vars: 3, consts: [[1, "form-group", "mb-3"], ["for", "simpleinput"], ["data-live-search", "true", 1, "selectpicker", 3, "id", "change"], ["disabled", "", "selected", "", 2, "white-space", "initial"], ["style", "white-space: initial;", 3, "value", 4, "ngFor", "ngForOf"], [2, "white-space", "initial", 3, "value"]], template: function CustomDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomDropdownComponent_Template_select_change_3_listener($event) { return ctx.dropDownChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomDropdownComponent_option_5_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.elementData.elementLabel[ctx.lang]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.elementData.element_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.elementData.element_data.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".highlight[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  border-color: red !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px red !important;\r\n}\r\n\r\n.highlight[_ngcontent-%COMP%]:focus{\r\n  border-color: red !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px red !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1kcm9wZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFFNUIsb0VBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsNEJBQTRCO0VBRTVCLG9FQUFvRTtBQUN0RSIsImZpbGUiOiJjdXN0b20tZHJvcGRvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGlnaGxpZ2h0e1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJlZCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0OmZvY3Vze1xyXG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZWQgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZWQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "6CW9":
/*!******************************************************************!*\
  !*** ./src/app/file-not-found404/file-not-found404.component.ts ***!
  \******************************************************************/
/*! exports provided: FileNotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNotFound404Component", function() { return FileNotFound404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FileNotFound404Component {
    constructor() { }
    ngOnInit() {
    }
}
FileNotFound404Component.ɵfac = function FileNotFound404Component_Factory(t) { return new (t || FileNotFound404Component)(); };
FileNotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileNotFound404Component, selectors: [["app-file-not-found404"]], decls: 30, vars: 0, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-xl-4", "mb-4"], [1, "error-text-box"], ["viewBox", "0 0 600 200"], ["id", "s-text"], ["text-anchor", "middle", "x", "50%", "y", "50%", "dy", ".35em"], [0, "xlink", "href", "#s-text", 1, "text"], [1, "text-center"], [1, "mt-0", "mb-2"], [1, "text-muted", "mb-3"], ["href", "/login", 1, "btn", "btn-success", "waves-effect", "waves-light"], [1, "footer", 2, "left", "0px"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], ["href", "https://www.pratham.org/", 1, "footer_link"]], template: function FileNotFound404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "symbol", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "404!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Whoops! Page not found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. You might want to check your internet connection. Here's a little tip that might help you get back on track.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Go To Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 2021 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "pratham.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLW5vdC1mb3VuZDQwNC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "8r4/":
/*!********************************************************!*\
  !*** ./src/app/login-direct/login-direct.component.ts ***!
  \********************************************************/
/*! exports provided: LoginDirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDirectComponent", function() { return LoginDirectComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");






class LoginDirectComponent {
    constructor(formBuilder, route, router, ServerService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.ServerService = ServerService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = '/unitlist';
        $(".selectpicker").selectpicker('refresh');
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.ServerService.login(this.f.email.value, this.f.password.value, 1).then((data) => {
            // console.log(this.f.project.value);
            if (data['status'] != 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Incorrect email or password!'
                });
            }
            else {
                const program = JSON.stringify(data['program']);
                localStorage.setItem('currentUser', data['user_details'].email);
                localStorage.setItem('BlockId', data['user_details'].BlockId);
                localStorage.setItem('userId', data['user_details'].userId);
                localStorage.setItem('name', data['user_details'].name);
                localStorage.setItem('roleId', data['user_details'].roleId);
                localStorage.setItem('is_tracker', data['program'][0]['is_tracker']);
                localStorage.setItem('Program', program);
                localStorage.setItem('project', '1');
                if (data['user_details'].roleId == 2) {
                    this.router.navigate([`admin`]);
                }
                else {
                    this.router.navigate([this.returnUrl]);
                }
            }
        }).catch((err) => {
            console.log(err);
            this.error = err;
            this.loading = false;
        });
    }
}
LoginDirectComponent.ɵfac = function LoginDirectComponent_Factory(t) { return new (t || LoginDirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"])); };
LoginDirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginDirectComponent, selectors: [["app-login-direct"]], decls: 28, vars: 1, consts: [[1, "account-pages", "mt-5", "mb-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "bg-pattern"], [1, "card-body", "p-4"], [1, "text-center", "w-75", "m-auto"], ["routerLink", "/login"], ["src", "assets/images/Pratham Full Logo - Black.png", "alt", "", "height", "62", 1, "prathamLogoHeightWidth"], [1, "text-muted", "mb-4", "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "emailaddress"], ["formControlName", "email", "type", "text", "id", "emailaddress", "required", "", "placeholder", "Enter User Id", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "required", "", "id", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkbox-signin", "checked", "", 1, "custom-control-input"], ["for", "checkbox-signin", 1, "custom-control-label"], [1, "form-group", "mb-0", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"]], template: function LoginDirectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginDirectComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Email/User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1kaXJlY3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "9tDg":
/*!*************************************************!*\
  !*** ./src/app/quiz/models/ChildValuesModel.ts ***!
  \*************************************************/
/*! exports provided: ChildValuesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildValuesModel", function() { return ChildValuesModel; });
class ChildValuesModel {
    constructor() {
        this.is_valid = 1;
    }
}


/***/ }),

/***/ "AbWS":
/*!********************************************!*\
  !*** ./src/app/quiz/models/QuizDetails.ts ***!
  \********************************************/
/*! exports provided: QuizDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizDetails", function() { return QuizDetails; });
class QuizDetails {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    servername: 'https://gpadmin.prathaminsights.in/cf/api/',
    servername_gp: 'https://gp.prathamapps.com/3.0/index.php/',
    servername_quiz: 'https://admin.prathaminsights.in/cf/v2/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BTxV":
/*!************************************************************!*\
  !*** ./src/app/custom-tabular/custom-tabular.component.ts ***!
  \************************************************************/
/*! exports provided: CustomTabularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTabularComponent", function() { return CustomTabularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _custom_tabular_textbox_custom_tabular_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-tabular-textbox/custom-tabular-textbox.component */ "W1uz");



function CustomTabularComponent_ng_container_6_tr_1_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", col_r4.colspan)("rowspan", col_r4.rowspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r4.elementLabel[ctx_r5.lang]);
} }
function CustomTabularComponent_ng_container_6_tr_1_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-custom-tabular-textbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", col_r4.colspan)("rowspan", col_r4.rowspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabularTextData", col_r4);
} }
function CustomTabularComponent_ng_container_6_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTabularComponent_ng_container_6_tr_1_ng_container_1_th_1_Template, 3, 3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomTabularComponent_ng_container_6_tr_1_ng_container_1_td_2_Template, 2, 3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r4.element_type == "ElementLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r4.element_type == "ElementText");
} }
function CustomTabularComponent_ng_container_6_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTabularComponent_ng_container_6_tr_1_ng_container_1_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1.childrens);
} }
function CustomTabularComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTabularComponent_ng_container_6_tr_1_Template, 2, 1, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r1.element_type == "ElementRow");
} }
class CustomTabularComponent {
    constructor() { }
    ngOnInit() {
        this.lang = localStorage.getItem('lang');
        console.log(this.lang);
        console.log(this.tabularData);
        console.log(this.tableDetail);
    }
}
CustomTabularComponent.ɵfac = function CustomTabularComponent_Factory(t) { return new (t || CustomTabularComponent)(); };
CustomTabularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTabularComponent, selectors: [["app-custom-tabular"]], inputs: { tabularData: "tabularData", tableDetail: "tableDetail" }, decls: 7, vars: 2, consts: [[1, "card-box"], [1, "header-title"], [1, "table-responsive"], [1, "table", "table-bordered", "mb-0"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["scope", "row", "style", "width:80px !important", "class", "text-center", 4, "ngIf"], ["style", "width:80px !important", "class", "text-center", 4, "ngIf"], ["scope", "row", 1, "text-center", 2, "width", "80px !important"], [1, "text-center", 2, "width", "80px !important"], [3, "tabularTextData"]], template: function CustomTabularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomTabularComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tableDetail.elementLabel[ctx.lang]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabularData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _custom_tabular_textbox_custom_tabular_textbox_component__WEBPACK_IMPORTED_MODULE_2__["CustomTabularTextboxComponent"]], styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  vertical-align:middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS10YWJ1bGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImN1c3RvbS10YWJ1bGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGQsIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "FCQU":
/*!*****************************************!*\
  !*** ./balvachan-child-attendance.json ***!
  \*****************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"element_type\":\"page\",\"element_data\":{\"element_title\":\"\",\"element_subtitle\":\"\"},\"element_id\":1,\"childrens\":[{\"element_id\":\"2\",\"element_type\":\"table\",\"element_size\":12,\"element_data\":{\"element_title\":\"Attendance Info - Teaching Days\",\"element_subtitle\":\"\",\"element_url\":\"https://dataentry.prathamapps.com/balvachan/attendance_info/\",\"element_parameters\":{\"action\":\"get\",\"unit_id\":\"1\"},\"element_header\":[{\"param\":\"may_teaching_day\",\"label\":\"May 2021\"},{\"param\":\"june_teaching_day\",\"label\":\"June 2021\"},{\"param\":\"july_teaching_day\",\"label\":\"July 2021\"},{\"param\":\"august_teaching_day\",\"label\":\"August 2021\"},{\"param\":\"september_teaching_day\",\"label\":\"Septermber 2021\"},{\"param\":\"october_teaching_day\",\"label\":\"October 2021\"},{\"param\":\"november_teaching_day\",\"label\":\"November 2021\"},{\"param\":\"december_teaching_day\",\"label\":\"December 2021\"},{\"param\":\"janauary_teaching_day\",\"label\":\"January 2022\"},{\"param\":\"february_teaching_day\",\"label\":\"February 2022\"},{\"param\":\"march_teaching_day\",\"label\":\"march 2022\"}]}},{\"element_id\":5,\"element_type\":\"section\",\"element_size\":12,\"element_data\":{\"element_title\":\"Child Attendance\",\"element_subtitle\":\"\"},\"childrens\":[{\"element_id\":1,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"state_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"\"},\"elementTooltip\":{\"en\":\"\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":2,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"district_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"\"},\"elementTooltip\":{\"en\":\"\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":3,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"block_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"\"},\"elementTooltip\":{\"en\":\"\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":4,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"unit_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"\"},\"elementTooltip\":{\"en\":\"\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":5,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"village_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"\"},\"elementTooltip\":{\"en\":\"\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":6,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"state_name\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"State\"},\"elementTooltip\":{\"en\":\"State\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":7,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"district_name\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"District / City\"},\"elementTooltip\":{\"en\":\"District / City\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":8,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"unit_code\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Unit Code\"},\"elementTooltip\":{\"en\":\"Unit Code\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":9,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"block_name\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Block / Ward\"},\"elementTooltip\":{\"en\":\"Block / Ward\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":10,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"unit_name\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Village/Town/Locality/Community\"},\"elementTooltip\":{\"en\":\"Village/Town/Locality/Community\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":11,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"child_attendance_lbl\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Child Attendance\"},\"elementTooltip\":{\"en\":\"Child Attendance\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":12,\"element_type\":\"ElementDropDown\",\"element_size\":1,\"database_param\":\"child_info\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"dropdown\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Child ID\"},\"elementTooltip\":{\"en\":\"Child ID\"},\"element_data\":{\"options\":[],\"data_url\":\"https://dataentry.prathamapps.com/balvachan/child_info/\",\"data_paramters\":{\"action\":\"get\",\"unit_id\":\"1\"}},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":13,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"may_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"May 2021\"},\"elementTooltip\":{\"en\":\"May 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":14,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"june_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"June 2021\"},\"elementTooltip\":{\"en\":\"June 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":15,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"july_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"July 2021\"},\"elementTooltip\":{\"en\":\"July 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":16,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"august_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"August 2021\"},\"elementTooltip\":{\"en\":\"August 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":17,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"september_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"September 2021\"},\"elementTooltip\":{\"en\":\"September 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":18,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"october_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"October 2021\"},\"elementTooltip\":{\"en\":\"October 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":19,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"november_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"November 2021\"},\"elementTooltip\":{\"en\":\"November 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":20,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"december_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"December 2021\"},\"elementTooltip\":{\"en\":\"December 2021\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":21,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"january_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"January 2022\"},\"elementTooltip\":{\"en\":\"January 2022\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":22,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"february_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"February 2022\"},\"elementTooltip\":{\"en\":\"February 2022\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":23,\"element_type\":\"ElementText\",\"element_size\":1,\"database_param\":\"march_attendance\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"March 2022\"},\"elementTooltip\":{\"en\":\"March 2022\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false},{\"element_id\":24,\"element_type\":\"ElementButton\",\"element_size\":12,\"database_param\":\"\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"button\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Add Child Attendance\"},\"elementTooltip\":{\"en\":\"Add Child Attendance\"},\"element_data\":{\"options\":[],\"data_url\":\"s://dataentry.prathamapps.com/balvachan/child_attendance/\"},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false}]},{\"element_id\":\"2\",\"element_type\":\"table\",\"element_size\":12,\"element_data\":{\"element_title\":\"Child Attendance\",\"element_subtitle\":\"\",\"element_url\":\"https://dataentry.prathamapps.com/balvachan/child_attendance/\",\"element_parameters\":{\"action\":\"get\",\"unit_id\":\"1\"},\"element_header\":[{\"param\":\"child_info_id\",\"label\":\"Child Info Id\"},{\"param\":\"may_teaching_day\",\"label\":\"May 2021\"},{\"param\":\"june_teaching_day\",\"label\":\"June 2021\"},{\"param\":\"july_teaching_day\",\"label\":\"July 2021\"},{\"param\":\"august_teaching_day\",\"label\":\"August 2021\"},{\"param\":\"september_teaching_day\",\"label\":\"Septermber 2021\"},{\"param\":\"october_teaching_day\",\"label\":\"October 2021\"},{\"param\":\"november_teaching_day\",\"label\":\"November 2021\"},{\"param\":\"december_teaching_day\",\"label\":\"December 2021\"},{\"param\":\"janauary_teaching_day\",\"label\":\"January 2022\"},{\"param\":\"february_teaching_day\",\"label\":\"February 2022\"},{\"param\":\"march_teaching_day\",\"label\":\"march 2022\"}]}}]}]");

/***/ }),

/***/ "HzbZ":
/*!***************************************************************************************!*\
  !*** ./src/app/quiz/custom-child-info-display/custom-child-info-display.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomChildInfoDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomChildInfoDisplayComponent", function() { return CustomChildInfoDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomChildInfoDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomChildInfoDisplayComponent.ɵfac = function CustomChildInfoDisplayComponent_Factory(t) { return new (t || CustomChildInfoDisplayComponent)(); };
CustomChildInfoDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomChildInfoDisplayComponent, selectors: [["app-custom-child-info-display"]], decls: 2, vars: 0, template: function CustomChildInfoDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "custom-child-info-display works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tY2hpbGQtaW5mby1kaXNwbGF5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "JBRV":
/*!****************************************************!*\
  !*** ./src/app/attendance/attendance.component.ts ***!
  \****************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _balvachan_child_attendance_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../balvachan-child-attendance.json */ "FCQU");
var _balvachan_child_attendance_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../balvachan-child-attendance.json */ "FCQU", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page/page.component */ "No3D");






function AttendanceComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function AttendanceComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} }
function AttendanceComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageData", page_r3)("formData", ctx_r2.form_data);
} }
class AttendanceComponent {
    constructor(route, router, server) {
        this.route = route;
        this.router = router;
        this.server = server;
        this.data = [];
        this.form_id = 0;
        this.state = '';
        this.local_key = "";
        this.assessment_cycle = 0;
        this.class = 0;
        this.child_id = 0;
        this.parameters = [];
        this.route.params.subscribe(event => {
            this.form_id = event.id;
            this.state = event.state;
            this.program_id = localStorage.getItem('history');
        });
        this.local_key = this.state + '/' + this.form_id;
        this.form_data = JSON.parse(localStorage.getItem(this.local_key));
    }
    ngOnInit() {
        if (this.state == 'Staying in Touch - Balvachan') {
            if (this.form_id == 5) {
                this.data = JSON.parse(JSON.stringify(_balvachan_child_attendance_json__WEBPACK_IMPORTED_MODULE_0__));
            }
        }
        else if (this.state == 'Staying in Touch - ECE') {
            if (this.form_id == 5) {
                this.data = JSON.parse(JSON.stringify(_balvachan_child_attendance_json__WEBPACK_IMPORTED_MODULE_0__));
            }
        }
        this.sendData();
    }
    sendData() {
        //alert("test edit table ");
        let parameters = [];
        parameters['unit_id'] = this.form_data['unit_id'];
        parameters['assessment_cycle'] = this.assessment_cycle;
        parameters['class'] = this.class;
        parameters['child_id'] = this.child_id;
        // console.log(this.form_data['unit_id']);
        // console.log(this.data[0]['childrens'][0]['childrens']);
        this.server.fetchData(this.url, parameters).then((response) => {
            let elements = this.data[0]['childrens'][0]['childrens'];
            let data = response['data'][0];
            if (Object.keys(data).length > 0) {
                elements.forEach(element => {
                    if (element.element_type == "ElementText" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementDropDown" || element.element_type == "ElementButton") {
                        // element.element_value = data[element['database_param']]
                        if (!this.form_data.hasOwnProperty(element.database_param)) {
                            this.form_data[element.database_param] = data[element['database_param']];
                        }
                        if (element.element_type == "ElementButton") {
                            console.log(element);
                            element.elementLabel.en = "Submit";
                            element.element_data.parameters = { "action": "update" };
                            console.log(element);
                        }
                    }
                });
            }
            // console.log(elements);
        }).catch((err) => {
            console.log(err);
        });
    }
}
AttendanceComponent.ɵfac = function AttendanceComponent_Factory(t) { return new (t || AttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"])); };
AttendanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AttendanceComponent, selectors: [["app-attendance"]], decls: 19, vars: 3, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, ""], ["href", "index-2.html", 1, "logo"], [1, "logo-lg"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54", 4, "ngIf"], ["src", "assets/images/image2.jpeg", "alt", "", "height", "54", 4, "ngIf"], [1, "content", "mt-5", "mb-5"], [1, "container-fluid"], [1, "row"], [1, "col-12"], ["class", "page-title-box", 4, "ngFor", "ngForOf"], [1, "footer", 2, "left", "0px"], [1, "col-md-6"], ["href", "https://www.pratham.org/", 1, "footer_link"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54"], ["src", "assets/images/image2.jpeg", "alt", "", "height", "54"], [1, "page-title-box"], [3, "pageData", "formData"]], template: function AttendanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AttendanceComponent_img_5_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AttendanceComponent_img_6_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AttendanceComponent_div_11_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " 2020 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "pratham.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.program_id != 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.program_id == 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Jhzt":
/*!*********************************************!*\
  !*** ./src/app/quiz/quiz/quiz.component.ts ***!
  \*********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _models_ChildInfoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ChildInfoModel */ "zeCW");
/* harmony import */ var _models_QuestionModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/QuestionModel */ "vxva");
/* harmony import */ var _models_QuizDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/QuizDetails */ "AbWS");
/* harmony import */ var _models_ChildDetailsModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ChildDetailsModel */ "mdnv");
/* harmony import */ var _models_ChildValuesModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/ChildValuesModel */ "9tDg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/server.service */ "NjuS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _custom_child_info_create_custom_child_info_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom-child-info-create/custom-child-info-create.component */ "Kz55");
/* harmony import */ var _custom_quiz_display_custom_quiz_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../custom-quiz-display/custom-quiz-display.component */ "PMiU");

//import { OptionModel } from '../models/OptionModel'











function QuizComponent_div_8_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "User Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Participant Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("nav-link rounded-0 pt-2 pb-2 ", ctx_r2.tab_disabled, "");
} }
function QuizComponent_div_8_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_8_div_21_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.parentName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.parentName);
} }
function QuizComponent_div_8_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "State Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function QuizComponent_div_8_div_22_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.stateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Current State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "BIHAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "JHARKHAND");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuizComponent_div_8_div_23_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", row_r18.district_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r18.district_name);
} }
function QuizComponent_div_8_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "District Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function QuizComponent_div_8_div_23_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r19.districtChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Select District");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QuizComponent_div_8_div_23_option_6_Template, 2, 2, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.districtArr);
} }
function QuizComponent_div_8_div_24_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", row_r22.block_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", row_r22.block_name, " ");
} }
function QuizComponent_div_8_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Block Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function QuizComponent_div_8_div_24_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.blockChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Select Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QuizComponent_div_8_div_24_option_6_Template, 2, 2, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.blockArr);
} }
function QuizComponent_div_8_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "School Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_8_div_25_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r25.villageName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.villageName);
} }
function QuizComponent_div_8_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u0915\u093F\u0924\u0928\u0947 \u092C\u091A\u094D\u091A\u0947 \u0907\u0938 \u0932\u093F\u0902\u0915 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902\u0917\u0947");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function QuizComponent_div_8_div_26_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.totalChildren = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.totalChildren);
} }
function QuizComponent_div_8_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_div_27_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r29.onAddViewChildButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add Participant");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuizComponent_div_8_div_29_app_custom_child_info_create_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-custom-child-info-create", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function QuizComponent_div_8_div_29_app_custom_child_info_create_2_Template_app_custom_child_info_create_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r32.saveChild($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("previous_childs", ctx_r31.childs)("lang", ctx_r31.lang)("child_number", (ctx_r31.dynamicChilds == null ? null : ctx_r31.dynamicChilds.length) + 1)("changing", ctx_r31.changingValue);
} }
function QuizComponent_div_8_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QuizComponent_div_8_div_29_app_custom_child_info_create_2_Template, 1, 4, "app-custom-child-info-create", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r10.dynamicChilds == null ? null : ctx_r10.dynamicChilds.length) == 0 || ctx_r10.addChild);
} }
function QuizComponent_div_8_div_30_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "iframe", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, ctx_r39.checkImageBlank(ctx_r39.current_question.question_resource_lang).replace("youtu.be", "youtube.com/embed").trim()), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
} }
function QuizComponent_div_8_div_30_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_div_30_ng_container_8_ng_container_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r41.openZoom(ctx_r41.checkImageBlank(ctx_r41.current_question.question_resource_lang)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMapInterpolate1"]("\n                                                      width: 100%;\n                                                      height: 45vh;\n                                                      background-image: url('", ctx_r40.checkImageBlank(ctx_r40.current_question.question_resource_lang), "');\n                                                      background-size: 100% 100%;\n                                                      background-repeat: no-repeat;");
} }
function QuizComponent_div_8_div_30_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QuizComponent_div_8_div_30_ng_container_8_ng_container_1_Template, 5, 3, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QuizComponent_div_8_div_30_ng_container_8_ng_container_2_Template, 2, 3, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r34.current_question.question_resource.indexOf("youtu") != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r34.current_question.question_resource.indexOf("youtu") == -1);
} }
function QuizComponent_div_8_div_30_div_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_div_30_div_9_ng_container_3_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r45.onAnswerClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const opt_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", "option" + opt_r44.option_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", opt_r44.option_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("checked", ctx_r43.checkWhetherSelected(ctx_r43.current_question.question_id, opt_r44.option_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("for", "option" + opt_r44.option_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](opt_r44.option_values[ctx_r43.lang] == undefined ? opt_r44.option_values["en"] : opt_r44.option_values[ctx_r43.lang]);
} }
function QuizComponent_div_8_div_30_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QuizComponent_div_8_div_30_div_9_ng_container_3_Template, 5, 5, "ng-container", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r35.current_question.question[ctx_r35.lang] == undefined ? ctx_r35.current_question.question["en"] : ctx_r35.current_question.question[ctx_r35.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r35.current_question.options);
} }
function QuizComponent_div_8_div_30_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_div_30_div_10_div_3_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r49.onCheckBoxAnswerClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", "option" + opt_r48.option_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", opt_r48.option_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("for", "option" + opt_r48.option_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", opt_r48.option_text, " ");
} }
function QuizComponent_div_8_div_30_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QuizComponent_div_8_div_30_div_10_div_3_Template, 4, 4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r36.current_question.question_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r36.current_question.options);
} }
function QuizComponent_div_8_div_30_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_div_30_input_14_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r51.quizNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuizComponent_div_8_div_30_input_15_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_div_30_input_15_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r53.quizSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuizComponent_div_8_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, QuizComponent_div_8_div_30_ng_container_8_Template, 3, 2, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, QuizComponent_div_8_div_30_div_9_Template, 4, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, QuizComponent_div_8_div_30_div_10_Template, 4, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_div_30_Template_input_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r55.quizPrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, QuizComponent_div_8_div_30_input_14_Template, 1, 0, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, QuizComponent_div_8_div_30_input_15_Template, 1, 0, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Best of Luck ", ctx_r11.current_child.child_name, " !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r11.current_question_percentage + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-valuenow", ctx_r11.current_question_percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Question ", ctx_r11.current_question_position, " of ", ctx_r11.questions.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.current_question.question_resource != null && ctx_r11.current_question.question_resource.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.current_question.question_type == "1" || ctx_r11.current_question.question_type == "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.current_question.question_type == "2" || ctx_r11.current_question.question_type == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r11.lastQues);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.lastQues);
} }
function QuizComponent_div_8_app_custom_quiz_display_31_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-custom-quiz-display", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function QuizComponent_div_8_app_custom_quiz_display_31_Template_app_custom_quiz_display_action_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r57.backToDashboard(); })("open", function QuizComponent_div_8_app_custom_quiz_display_31_Template_app_custom_quiz_display_open_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r59.openZoom($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lang", ctx_r12.lang)("quesArray", ctx_r12.questions)("childValues", ctx_r12.childValues);
} }
function QuizComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Welcome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, QuizComponent_div_8_ul_8_Template, 11, 3, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Contact No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function QuizComponent_div_8_Template_input_keydown_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r60.showToolTip($event); })("focusout", function QuizComponent_div_8_Template_input_focusout_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r62.showToolTip($event); })("ngModelChange", function QuizComponent_div_8_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r63.phoneNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuizComponent_div_8_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r64.fetchPrevRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, QuizComponent_div_8_div_21_Template, 5, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, QuizComponent_div_8_div_22_Template, 10, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, QuizComponent_div_8_div_23_Template, 7, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, QuizComponent_div_8_div_24_Template, 7, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, QuizComponent_div_8_div_25_Template, 5, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, QuizComponent_div_8_div_26_Template, 5, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, QuizComponent_div_8_div_27_Template, 4, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, QuizComponent_div_8_div_29_Template, 3, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, QuizComponent_div_8_div_30_Template, 16, 11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, QuizComponent_div_8_app_custom_quiz_display_31_Template, 1, 3, "app-custom-quiz-display", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Quiz \u092E\u0947\u0902 \u092D\u093E\u0917 \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0927\u0928\u094D\u092F\u0935\u093E\u0926");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\u091C\u0932\u094D\u0926 \u0939\u0940 \u0939\u092E \u0906\u092A\u0915\u0947 \u0932\u093F\u090F \u0932\u0947\u0915\u0930 \u0906\u090F\u0902\u0917\u0947 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " \u0924\u094B \u0926\u0947\u0916\u0924\u0947 \u0930\u0939\u093F\u090F,\u0914\u0930 \u0938\u0940\u0916\u0924\u0947 \u0930\u0939\u093F\u090F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "\u0915\u0930\u094B\u0928\u093E,\u0925\u094B\u095C\u0940 \u0938\u0940 \u092E\u0938\u094D\u0924\u0940,\u0925\u094B\u095C\u0940 \u092A\u095D\u093E\u0908 \u0964");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("col-md-12 ", ctx_r0.endTime == true ? "d-none" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("minlength", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.noRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.noRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.noRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.noRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.noRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.noRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.quizview && !ctx_r0.viewRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.quizview && !ctx_r0.viewRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.viewRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("col-md-12 ", ctx_r0.endTime == false ? "d-none" : "", "");
} }
function QuizComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuizComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuizComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuizComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, QuizComponent_div_9_div_1_Template, 4, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, QuizComponent_div_9_div_2_Template, 3, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, QuizComponent_div_9_div_3_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Your score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.totalScore >= 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.totalScore >= 50 && ctx_r1.totalScore < 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.totalScore < 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.totalScore);
} }
class QuizComponent {
    constructor(server, route) {
        this.server = server;
        this.childs = [];
        this.dynamicChilds = [];
        this.addChild = false;
        this.quizview = false;
        this.lastQues = false;
        this.questions = [];
        this.stateArr = [];
        this.districtArr = [];
        this.blockArr = [];
        this.current_question = new _models_QuestionModel__WEBPACK_IMPORTED_MODULE_1__["QuestionModel"]();
        this.current_question_position = 0;
        this.current_question_percentage = 0;
        this.current_quiz_details = new _models_QuizDetails__WEBPACK_IMPORTED_MODULE_2__["QuizDetails"];
        this.current_child_details = new _models_ChildDetailsModel__WEBPACK_IMPORTED_MODULE_3__["ChildDetailsModel"]();
        this.current_child_values = new _models_ChildValuesModel__WEBPACK_IMPORTED_MODULE_4__["ChildValuesModel"]();
        this.current_quiz_values = [];
        this.lang = 'hin';
        this.form_id = "";
        this.max_child = 20;
        this.totalScore = 100;
        this.totalQues = 0;
        this.marks_per_ques = 10;
        this.ques_std_id = 0;
        this.phoneName = "";
        this.userType = 0;
        this.state_id = 0;
        this.district_id = 0;
        this.block_id = 0;
        this.villageName = "";
        this.totalChildren = 5;
        this.parentName = "";
        this.childCheckboxData = [];
        this.quiz_parent_id = 0;
        this.checkbox_param_id = 0;
        this.childValues = [];
        this.viewRecords = false;
        this.noRecords = false;
        this.endTime = false;
        this.showTab = true;
        this.invalidUserType = false;
        this.home = true;
        this.quiz_success = false;
        this.tab_disabled = "disabled";
        this.imageSource = "";
        this.quizType = 0;
        this.child_standard = "";
        this.json = JSON;
        route.paramMap.subscribe(params => {
            this.lang = params.get('lang');
            this.form_id = params.get('form_id');
            //this.form_id = (this.form_id==null)?"74":this.form_id;
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.wizard = $('#progressbarwizard').bootstrapWizard();
        }, 500);
        var currentDateTime = new Date();
        $('#form_rating').modal('show');
    }
    onAddViewChildButtonClick() {
        $('#tab_2').removeClass('disabled');
        $('#addViewChild').attr('disabled', true);
        let registered_no = localStorage.getItem('registered_no');
        if (this.quiz_parent_id != 0) {
            $('#addViewChild').removeClass('glow-button');
            Ladda.stopAll();
            this.wizard.bootstrapWizard('next');
        }
        else {
            if (($("#parent_contact").val() == "") || (this.phoneNumber < 1000000000)) {
                alert("Incorrect Contact No.");
                $('#addViewChild').removeAttr('disabled');
                setTimeout(() => {
                    Ladda.stopAll();
                    console.log("Stop all");
                }, 500);
            }
            else if ((this.parentName == '') || (this.district_id == 0) || (this.block_id == 0)) {
                alert("All fields Reuired!");
                $('#addViewChild').removeAttr('disabled');
                setTimeout(() => {
                    Ladda.stopAll();
                    console.log("Stop all");
                }, 500);
            }
            else {
                setTimeout(() => {
                    Ladda.stopAll();
                    console.log("Stop all");
                }, 500);
                let jsonData = {};
                jsonData['action'] = "i";
                jsonData['user_name'] = this.parentName;
                jsonData['contact_no'] = this.phoneNumber;
                jsonData['user_type'] = 0;
                jsonData['state'] = this.state_id;
                ;
                jsonData['form_id'] = this.form_id;
                jsonData['district'] = this.district_id;
                jsonData['block'] = this.block_id;
                jsonData['total_children'] = this.totalChildren;
                jsonData['village_name'] = ''; //this.villageName;
                jsonData['active'] = "1";
                $('#addViewChild').removeClass('glow-button');
                this.server.saveParentDetails(jsonData).then((res) => {
                    this.tab_disabled = "";
                    Ladda.stopAll();
                    this.wizard.bootstrapWizard('next');
                    this.quiz_parent_id = res['quiz_user_id'];
                }).catch((err) => {
                    console.log(err);
                    alert(JSON.stringify(err['error']));
                    $('#addViewChild').removeAttr('disabled');
                });
            }
        }
    }
    onAddMoreChildClick() {
        if (this.dynamicChilds.length > this.max_child) {
            alert("Sorry you are already added maximum (" + this.max_child + " ) participant!");
        }
        else {
            this.addChild = true;
            setTimeout(() => {
                //this.changingValue.next(true);
                $('.selectpicker').selectpicker('refresh').selectpicker('val', '');
            }, 1000);
        }
    }
    saveChild(childInfo) {
        this.dynamicChilds.push(childInfo);
        this.addChild = false;
    }
    quizNext() {
        if (this.current_quiz_values.findIndex(a => a.question_id == this.current_question.question_id) == -1)
            alert("Please answer this question");
        else if (this.current_question_position < this.questions.length) {
            $('#btn-next').removeClass('next-glow-button');
            this.current_question_position++;
            this.lastQues = (this.current_question_position == this.questions.length);
            this.current_question = this.questions[this.current_question_position - 1];
            this.current_question_percentage = ((this.current_question_position - 1) / (this.questions.length - 1)) * 100;
            this.current_quiz_details.total_score = this.current_quiz_values.map(item => item.question_score).reduce((prev, next) => prev + next);
        }
    }
    fetchPrevRecord() {
        $('#fetchPrevRecord').removeClass('glow-button');
        $('#fetchPrevRecord').attr('disabled', true);
        if ($("#parent_contact").val() == "" || this.phoneNumber < 1000000000) {
            alert("Incorrect Contact No.");
            $('#fetchPrevRecord').removeAttr('disabled');
        }
        else {
            let registered_no = localStorage.getItem('registered_no');
            if (registered_no != null && registered_no.length > 20) // user no
                registered_no = registered_no.slice(0, -1);
            if (this.phoneNumber.toString().length > 10)
                this.phoneNumber = parseInt(this.phoneNumber.toString().slice(0, -1));
            let jsonData = {};
            jsonData['action'] = 'g';
            jsonData['contact_no'] = this.phoneNumber;
            jsonData['form_id'] = this.form_id;
            this.dynamicChilds = [];
            this.server.fetchPrevData(jsonData).then((res) => {
                if (res[0] == undefined) {
                    if (res['success'] == false) {
                        this.noRecords = false;
                        alert(res['message']);
                    }
                    else {
                        this.noRecords = true;
                        setTimeout(() => {
                            $("#user_type").val(0);
                            $("#state").val(0);
                            $("#district").val(0);
                            $("#block").val(0);
                            $('.selectpicker').selectpicker('refresh').val("");
                            this.parentName = "";
                            this.quiz_parent_id = 0;
                            $("#village_name").val("");
                            $("#total_children").val("");
                            $('#fetchPrevRecord').removeAttr('disabled');
                            $('#addViewChild').addClass('glow-button');
                        }, 500);
                    }
                }
                else {
                    $('#tab_2').removeClass('disabled');
                    this.noRecords = true;
                    this.parentName = res[0]['user_name'];
                    this.quiz_parent_id = res[0]['quiz_user_id'];
                    setTimeout(() => {
                        $('#parent_contact').attr('disabled', true);
                        $("#state").attr('disabled', true);
                        $("#district").attr('disabled', true);
                        $("#parent_name").attr('disabled', true);
                        $("#block").attr('disabled', true);
                        $("#village_name").attr('disabled', true);
                        $("#user_type").val(res[0]['user_type']);
                        this.userType = res[0]['user_type'];
                        if (res[0]['user_type'] == 0)
                            this.invalidUserType = true;
                        else
                            $("#user_type").attr('disabled', true);
                        $("#state").val(res[0]['state']);
                        this.fetchDistricts(res[0]['state']);
                        this.district_id = res[0]['district'];
                        $("#district").val(res[0]['district']);
                        $('.selectpicker').selectpicker('refresh');
                        this.fetchBlocks(res[0]['district']);
                        this.block_id = res[0]['block'];
                        $("#block").val(res[0]['block']);
                        $('.selectpicker').selectpicker('refresh');
                        $('#addViewChild').addClass('glow-button');
                    }, 1000);
                    var colors = ['#E0F2F7', '#E0E0F8', '#FBEFF8', '#F2F2F2', '#F8E0E0', '#F6E3CE', '#F5F6CE', '#E3F6CE', '#D8F6CE', '#CEF6E3'];
                    res[0]['child_list'].forEach(child_server => {
                        let child = new _models_ChildInfoModel__WEBPACK_IMPORTED_MODULE_0__["ChildInfoModel"]();
                        child.random_color = colors[Math.floor(Math.random() * colors.length)];
                        child.child_id = child_server['child_id'];
                        child.child_name = child_server['child_name'];
                        child.school_name = child_server['school_name'];
                        child.child_school = child_server['school_type'];
                        child.phone_type = child_server['phone_type'];
                        child.age = child_server['age'];
                        child.gender = child_server['gender'];
                        child.who_are_you = child_server['who_are_you'];
                        child.type_of_quiz_taker = child_server['type_of_quiz_taker'];
                        child.received_math_content = child_server['received_math_content'];
                        child.child_score = child_server['total_score'];
                        child.is_server = true;
                        child.child_quiz_submitted = true;
                        child.child_standard = child_server['std'];
                        child.form_id = child_server['form_id'];
                        child.child_correct_answers = child_server['total_correct_answer'];
                        child.child_wrong_answers = child_server['total_wrong_answer'];
                        let quiz_detail = new _models_QuizDetails__WEBPACK_IMPORTED_MODULE_2__["QuizDetails"]();
                        child.quiz_details = child_server['child_mapping'];
                        if (child_server['form_id'] < this.form_id && (res[0]['child_list'].filter(a => a['child_id'] == child_server['child_id'])).length < 3) {
                            child.child_quiz_submitted = false;
                            child.quiz_details = new _models_QuizDetails__WEBPACK_IMPORTED_MODULE_2__["QuizDetails"]();
                            this.childs.push(child);
                            //console.log(this.childs);
                        }
                        else if (child_server['form_id'] == this.form_id) {
                            this.dynamicChilds.push(child);
                        }
                        //console.log(this.dynamicChilds);
                    });
                }
                setTimeout(() => {
                    $('.selectpicker').selectpicker('refresh');
                    Ladda.bind(".ladda-button");
                }, 500);
            }).catch((err) => {
                console.log(err);
                alert(err['error']);
                this.noRecords = false;
                $('#fetchPrevRecord').removeAttr('disabled');
            });
            //}
        }
    }
    stateChange(event) {
        this.state_id = event.target.value;
        this.server.fetchDistricts_quiz(this.state_id).then((res) => {
            if (res['status'] == "success") {
                this.districtArr = res['data'];
                setTimeout(() => {
                    $('.selectpicker').selectpicker('refresh');
                }, 500);
            }
        }).catch((err) => {
        });
    }
    fetchDistricts(state_id) {
        this.server.fetchDistricts_quiz(state_id).then((res) => {
            if (res['status'] == "success") {
                this.districtArr = res['data'];
                setTimeout(() => {
                    if (this.district_id == 0)
                        $('#district').selectpicker('refresh').val("");
                    else
                        $('#district').selectpicker('refresh').val(this.district_id);
                    $('#district').selectpicker('refresh');
                }, 500);
            }
        }).catch((err) => {
        });
    }
    districtChange(event) {
        this.district_id = event.target.value;
        this.fetchBlocks(this.district_id);
        setTimeout(() => {
            this.block_id = 0;
            $('.selectpicker').selectpicker('refresh');
        }, 2000);
        this.block_id = 0;
    }
    fetchBlocks(district_id) {
        this.server.fetchBlock_quiz(district_id).then((res) => {
            if (res['status'] == "success") {
                this.blockArr = res['data'];
                setTimeout(() => {
                    if (this.block_id == 0)
                        $('#block').selectpicker('refresh').val("");
                    else
                        $('#block').selectpicker('refresh').val(this.block_id);
                    $('#block').selectpicker('refresh');
                }, 500);
            }
        }).catch((err) => {
        });
    }
    blockChange(event) {
        setTimeout(() => {
            this.block_id = event.target.value;
        }, 500);
    }
    changeUserType(event) {
        this.userType = event.target.value;
    }
    createArrayFromString(string) {
        if (string == null)
            return [];
        return string.split();
    }
    onCheckBoxAnswerClick(event) {
        this.checkbox_param_id = this.current_question.question_id;
        let position = this.childCheckboxData.findIndex(a => a == event.target.value);
        if (position == -1) {
            this.childCheckboxData.push(event.target.value);
        }
        else {
            this.childCheckboxData.splice(position, 1);
        }
    }
    viewResultChild(value) {
        console.log(value);
        this.home = false;
        setTimeout(() => {
            $('.selectpicker').selectpicker('refresh').selectpicker('val', '');
        }, 500);
        this.current_child = this.dynamicChilds.filter(a => a.child_id == value.child_id)[0];
        if (value.type != '') {
            this.child_standard = value.type;
        }
        let childId = value.child_id;
        this.server.fetchQuestions(this.child_standard, this.form_id, childId).then((res) => {
            if (res['success'] == true) {
                this.ques_std_id = res['quiz_set_id'];
                this.questions = res['data'];
                let jsonData = {};
                let childDetails = {};
                childDetails["action"] = "g";
                childDetails["child_id"] = value.child_id;
                childDetails["form_id"] = this.form_id;
                jsonData['child_details'] = childDetails;
                //console.log(JSON.stringify(jsonData));
                this.server.fetchChildRecords(jsonData).then((res) => {
                    console.log("check details");
                    this.childValues = res[0]['child_values'];
                    this.viewRecords = true;
                }).catch((err) => {
                });
            }
        }).catch((err) => {
        });
    }
    backToDashboard() {
        this.viewRecords = false;
        this.quizview = false;
        this.home = true;
        setTimeout(() => {
            $('.selectpicker').selectpicker('refresh').selectpicker('val', '');
        }, 500);
    }
    showToolTip(element) {
        //console.log(element.target.value)
        if (element.target.value == "") {
            $('#fetchPrevRecord').removeClass('glow-button');
        }
        else {
            $('#fetchPrevRecord').addClass('glow-button');
        }
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_6__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 28, vars: 3, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, ""], ["href", "javascript:void(0)", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54"], [1, "content", "mt-5", "mb-5"], [1, "container"], ["class", "row", "justify-content-center", "", 4, "ngIf"], ["class", "col-md-12 quiz-success d-flex flex-column align-items-center", 4, "ngIf"], [1, "footer", 2, "left", "0px"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], ["id", "welcome_modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myCenterModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bs-example-modal-center", 2, "display", "none"], [1, "modal-dialog", "modal-dialog-centered"], ["id", "success_modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myCenterModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bs-example-modal-center", 2, "display", "none"], ["id", "zoom_image", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myCenterModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bs-example-modal-center", 2, "display", "none"], [1, "modal-dialog", "modal-full", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body"], [1, "d-flex", "overflow-auto"], [1, "w-150", 3, "src"], ["justify-content-center", "", 1, "row"], [1, "card"], [1, "card-body"], [1, "mb-3"], ["id", "progressbarwizard"], ["class", "nav nav-pills bg-light nav-justified form-wizard-header mb-3", "id", "myTab", 4, "ngIf"], [1, "tab-content", "b-0", "mb-0"], ["id", "account-2", 1, "tab-pane"], [1, "col-12"], [1, "form-group", "mb-3"], ["for", "parent_contact"], [1, "input-group", "bootstrap-touchspin", "bootstrap-touchspin-injected"], ["type", "number", "data-toggle", "input-mask", "data-mask-format", "0000000000", "id", "parent_contact", "name", "parent_contact", 1, "form-control", 3, "ngModel", "keydown", "focusout", "ngModelChange"], [1, "input-group-btn", "input-group-append"], ["type", "button", "id", "fetchPrevRecord", 1, "btn", "btn-primary", "bootstrap-touchspin-up", 3, "click"], [1, "fe-search"], ["class", "form-group mb-3", 4, "ngIf"], ["class", "form-group mb-3", "style", "display: none;", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["id", "profile-tab-2", 1, "tab-pane"], ["class", "row", 4, "ngIf"], [3, "lang", "quesArray", "childValues", "action", "open", 4, "ngIf"], [1, "ques_line_height"], ["id", "myTab", 1, "nav", "nav-pills", "bg-light", "nav-justified", "form-wizard-header", "mb-3"], [1, "nav-item"], ["href", "#account-2", "data-toggle", "tab", 1, "nav-link", "rounded-0", "pt-2", "pb-2"], [1, "mdi", "mdi-account-circle", "mr-1"], [1, "d-sm-inline"], ["href", "#profile-tab-2", "id", "tab_2", "data-toggle", "tab"], [1, "mdi", "mdi-face-profile", "mr-1"], ["for", "parent_name"], ["type", "text", "id", "parent_name", "name", "parent_name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "simpleinput"], ["id", "state", "data-style", "btn-outline-primary", 1, "selectpicker", "show-tick", 3, "change"], ["value", "4"], ["value", "15"], ["id", "district", "data-style", "btn-outline-primary", 1, "selectpicker", "show-tick", 3, "change"], ["disabled", "true"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "block", "data-style", "btn-outline-primary", 1, "selectpicker", "show-tick", 3, "change"], [1, "form-group", "mb-3", 2, "display", "none"], ["type", "text", "id", "village_name", "name", "village_name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "total_children", "name", "total_children", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "row", "mb-3", "d-flex", "justify-content-center"], ["type", "button", "id", "addViewChild", "data-style", "expand-right", 1, "btn", "btn-primary", "ladda-button", "glow-button", 3, "click"], [3, "previous_childs", "lang", "child_number", "changing", "action", 4, "ngIf"], [3, "previous_childs", "lang", "child_number", "changing", "action"], [1, "progress", "mb-3", "progress-md"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], [4, "ngIf"], ["class", "form-group mt-3 ml-2", 4, "ngIf"], [1, "float-left", "mt-3"], ["type", "button", "name", "prev", "value", "Prev", 1, "btn", "btn-danger", 3, "click"], [1, "float-right", "mt-3"], ["type", "button", "class", "btn btn-success", "id", "btn-next", "name", "next", "value", "Next", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary ladda-button", "data-style", "expand-right", "id", "quizFinish", "name", "finish", "value", "Finish", 3, "click", 4, "ngIf"], [1, "d-flex"], ["width", "100%", "height", "345", "frameborder", "0", "allowfullscreen", "", 3, "src"], [1, "mb-1", 3, "click"], [1, "form-group", "mt-3", "ml-2"], [1, "lead", "mb-3", "ques_line_height"], [4, "ngFor", "ngForOf"], [1, "radio", "radio-info", "mt-2"], ["type", "radio", "name", "customRadio", 1, "custom-control-input", 3, "id", "value", "checked", "click"], [1, "lead", 3, "for"], ["class", "checkbox checkbox-primary mt-2", 4, "ngFor", "ngForOf"], [1, "checkbox", "checkbox-primary", "mt-2"], ["type", "checkbox", "name", "checkboxInline", 3, "id", "value", "click"], ["type", "button", "id", "btn-next", "name", "next", "value", "Next", 1, "btn", "btn-success", 3, "click"], ["type", "button", "data-style", "expand-right", "id", "quizFinish", "name", "finish", "value", "Finish", 1, "btn", "btn-primary", "ladda-button", 3, "click"], [3, "lang", "quesArray", "childValues", "action", "open"], [1, "col-md-12", "quiz-success", "d-flex", "flex-column", "align-items-center"], ["class", "d-flex flex-row margin-top-10", 4, "ngIf"], [1, "font-size-5", "mt-3", "text-warning", "success-font", "text-center"], [1, "d-flex", "flex-row", "margin-top-10"], [1, "far", "fa-grin-hearts", "font-size-20", "margin-top-10", "text-warning"], [1, "far", "fa-grin-hearts", "font-size-20", "text-warning"], [1, "far", "fa-smile-beam", "font-size-20", "margin-top-10", "text-warning"], [1, "far", "fa-frown", "font-size-20", "margin-top-10", "text-warning"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, QuizComponent_div_8_Template, 45, 19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, QuizComponent_div_9_Template, 8, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " 2021 \u00A9 Pratham ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.quiz_success);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.quiz_success);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.imageSource, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _custom_child_info_create_custom_child_info_create_component__WEBPACK_IMPORTED_MODULE_10__["CustomChildInfoCreateComponent"], _custom_quiz_display_custom_quiz_display_component__WEBPACK_IMPORTED_MODULE_11__["CustomQuizDisplayComponent"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);\r\n    padding: 0 10px 0 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    height: 70px;\r\n    z-index: 100;\r\n    padding-left: 30px !important;\r\n    border-bottom: 3px solid #FFC000;\r\n  }\r\n\r\n  .disabled-contenct[_ngcontent-%COMP%] {\r\n   pointer-events: none;\r\n   opacity: 1;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFFdEIsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7O0VBRUE7R0FDQyxvQkFBb0I7R0FDcEIsVUFBVTtDQUNaIiwiZmlsZSI6InF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY3VzdG9tIHtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzM4NDE0YTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2JhKDE1NCwxNjEsMTcxLC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMzVweCAwIHJnYmEoMTU0LDE2MSwxNzEsLjE1KTtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRkZDMDAwO1xyXG4gIH1cclxuXHJcbiAgLmRpc2FibGVkLWNvbnRlbmN0IHtcclxuICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgIG9wYWNpdHk6IDE7XHJcbiB9Il19 */"] });


/***/ }),

/***/ "Kz55":
/*!*************************************************************************************!*\
  !*** ./src/app/quiz/custom-child-info-create/custom-child-info-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomChildInfoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomChildInfoCreateComponent", function() { return CustomChildInfoCreateComponent; });
/* harmony import */ var _quiz_child_registration_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../quiz-child-registration.json */ "roMS");
var _quiz_child_registration_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../quiz-child-registration.json */ "roMS", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/server.service */ "NjuS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page/page.component */ "No3D");






function CustomChildInfoCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageData", page_r1)("formData", ctx_r0.form_data);
} }
class CustomChildInfoCreateComponent {
    constructor(route, router, server) {
        this.route = route;
        this.router = router;
        this.server = server;
        this.data = [];
        this.form_id = 0;
        this.state = '';
        this.local_key = "";
        this.assessment_cycle = 0;
        this.class = 0;
        this.route.params.subscribe(event => {
            this.form_id = event.id;
            this.state = decodeURIComponent(event.state);
        });
        //this.local_key = this.state + '/' + this.form_id
        //this.form_data = JSON.parse(localStorage.getItem(this.local_key))
    }
    ngOnInit() {
        this.data = JSON.parse(JSON.stringify(_quiz_child_registration_json__WEBPACK_IMPORTED_MODULE_0__));
        console.log(this.data);
        //if(this.state=='87'){
        //if(this.form_id==1){
        //this.assessment_cycle = 1;
        //this.url = 'https://gp.prathamapps.com/3.0/index.php/Pre_primary_portal/get_teacher_profile';
        //}
        // this.userData=JSON.parse(localStorage.getItem('userData'));
        //console.log(this.userData);
        // $('#username').text("Welcome "+this.userData.user_name+"!");
        //}
        let parameters = [];
        parameters['unit_id'] = this.state; //this.form_data['unit_id'];
        parameters['assessment_cycle'] = 1;
        parameters['class'] = this.class;
        // console.log(this.form_data['unit_id']);
        // console.log(this.data[0]['childrens'][0]['childrens']);
        this.server.fetchData(this.url, parameters).then((response) => {
            let elements = this.data[0]['childrens'][0]['childrens'];
            let data = response['data'][0];
            if (Object.keys(data).length > 0) {
                elements.forEach(element => {
                    if (element.element_type == "ElementText" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementDropDown") {
                        // element.element_value = data[element['database_param']]
                        if (!this.form_data.hasOwnProperty(element.database_param))
                            this.form_data[element.database_param] = data[element['database_param']];
                    }
                    else if (element.element_type == "ElementButton") {
                        element.elementLabel.en = "Submit";
                        element.element_data.parameters = { "action": "update" };
                    }
                });
            }
            // console.log(elements);
        }).catch((err) => {
            console.log(err);
        });
    }
    sendData() {
    }
}
CustomChildInfoCreateComponent.ɵfac = function CustomChildInfoCreateComponent_Factory(t) { return new (t || CustomChildInfoCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"])); };
CustomChildInfoCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomChildInfoCreateComponent, selectors: [["app-custom-child-info-create"]], decls: 1, vars: 1, consts: [["class", "page-title-box", 4, "ngFor", "ngForOf"], [1, "page-title-box"], [3, "pageData", "formData"]], template: function CustomChildInfoCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CustomChildInfoCreateComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tY2hpbGQtaW5mby1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "NjuS":
/*!*********************************************!*\
  !*** ./src/app/_services/server.service.ts ***!
  \*********************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




//import { CommentStmt } from '@angular/compiler'
class CustomEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
class ServerService {
    constructor(http) {
        this.http = http;
        this.data = {};
        this.servername = 'http://tarlinsights.org/impact/api/user/';
    }
    login(email, password, project) {
        // if(project == 1)
        //   this.servername = 'https://pc.prathamapps.com/index.php/Data_entry_portal/user_login';
        // else if(project == 2)
        this.servername = 'https://tarlinsights.org/impact/api/user/login/';
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append('u', email);
            body = body.append('p', password);
            this.http.post(this.servername, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('BlockId');
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        localStorage.removeItem('Program');
    }
    fetchState() {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            this.http.post(this.servername + 'location/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchDistricts(state_id) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append("filter_value", state_id);
            body = body.append("filter_type", "state");
            this.http.post(this.servername + 'location/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchBlock(district_id) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append("filter_value", district_id);
            body = body.append("filter_type", "district");
            this.http.post(this.servername + 'location/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    sendData(url, data) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
            // console.log(JSON.stringify(data));
            let keys = Object.keys(data);
            keys.forEach(element => {
                //console.log(element,data[element])
                body = body.append(element, data[element]);
            });
            // body = body.append("filter_value",district_id);
            // body = body.append("filter_type","district");
            console.log(url, '-', body);
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchDropdownData(url, data) {
        console.log(url);
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            let keys = Object.keys(data);
            keys.forEach(element => {
                body = body.append(element, data[element]);
            });
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchTabularData(url, data) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            let keys = Object.keys(data);
            keys.forEach(element => {
                body = body.append(element, data[element]);
            });
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchData(url, data) {
        // console.log(data);
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            let keys = Object.keys(data);
            // console.log(keys);
            keys.forEach(element => {
                body = body.append(element, data[element]);
            });
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchState_quiz() {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_quiz + 'location/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchDistricts_quiz(state_id) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append("filter_value", state_id);
            body = body.append("filter_type", "state");
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_quiz + 'location/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchBlock_quiz(district_id) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append("filter_value", district_id);
            body = body.append("filter_type", "district");
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_quiz + 'location/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    saveParentDetails(jsonData) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append("data", JSON.stringify(jsonData));
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_quiz + 'user_details/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchPrevData(jsonData) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append("data", JSON.stringify(jsonData));
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_quiz + 'user_details/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchQuestions(parameters, form_id, childId) {
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append('category_id', parameters);
            body = body.append('form_id', form_id);
            body = body.append('child_id', childId);
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_quiz + 'get_parameters_quiz/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchChildRecords(jsonData) {
        console.log(JSON.stringify(jsonData));
        return new Promise((resolve, reject) => {
            let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            body = body.append("data", JSON.stringify(jsonData));
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_quiz + 'child_details/', body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchProgramGP(project_id) {
        return new Promise((resolve, reject) => {
            //let body: HttpParams = new HttpParams();
            let url = 'https://testpc.prathamapps.com/index.php/Data_entry_portal/program_list';
            const body = new FormData();
            body.append("project_id", project_id);
            console.log(body);
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    fetchProgram() {
        return new Promise((resolve, reject) => {
            //let body: HttpParams = new HttpParams();
            let url = 'https://gpv2.prathamapps.com/api/gp/programs/';
            this.http.get(url).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    submitCSV(app_type, project_id, file, program_id, category_id) {
        return new Promise((resolve, reject) => {
            //let body: HttpParams = new HttpParams();
            const body = new FormData();
            body.append("app_type", app_type);
            body.append("project_id", project_id);
            body.append("program_id", program_id);
            body.append("category_id", category_id);
            body.append("file", file);
            console.log(body);
            let url = 'https://dataentry.prathamapps.com/parameters/upload_parameters/';
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    getJson(app_type, project_id, program_id, category_id) {
        return new Promise((resolve, reject) => {
            //let body: HttpParams = new HttpParams();
            const body = new FormData();
            body.append("app_type", app_type);
            body.append("project_id", project_id);
            body.append("program_id", program_id);
            body.append("category_id", category_id);
            console.log(body);
            let url = 'https://dataentry.prathamapps.com/parameters/get/';
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    saveJson(app_type, project_id, JsonToSave, program_id, category_id) {
        return new Promise((resolve, reject) => {
            //let body: HttpParams = new HttpParams();
            const body = new FormData();
            body.append("app_type", app_type);
            body.append("project_id", project_id);
            body.append("program_id", program_id);
            body.append("category_id", category_id);
            body.append("parameters", JsonToSave);
            console.log(body);
            let url = 'https://dataentry.prathamapps.com/parameters/publish/';
            this.http.post(url, body).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    getExcel(app_type, project_id, program_id, category_id) {
        return new Promise((resolve, reject) => {
            //let body: HttpParams = new HttpParams();
            const body = new FormData();
            body.append("app_type", app_type);
            body.append("project_id", project_id);
            body.append("program_id", program_id);
            body.append("category_id", category_id);
            //body.append("parameters",JsonToSave);
            console.log(body);
            let url = 'https://dataentry.prathamapps.com/parameters/export/';
            this.http.post(url, body, { responseType: 'blob' }).subscribe(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
}
ServerService.ɵfac = function ServerService_Factory(t) { return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ServerService, factory: ServerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "No3D":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-section/custom-section.component */ "XGnm");
/* harmony import */ var _custom_tabular_custom_tabular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-tabular/custom-tabular.component */ "BTxV");
/* harmony import */ var _custom_table_custom_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-table/custom-table.component */ "d9oz");





function PageComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function PageComponent_div_10_app_custom_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reloadTable", function PageComponent_div_10_app_custom_section_1_Template_app_custom_section_reloadTable_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.reload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx_r3.formData)("submittedData", ctx_r3.submittedData)("sectionData", page_r2)("reloadStatus", ctx_r3.reloadStatus);
} }
function PageComponent_div_10_app_custom_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-section", 13);
} if (rf & 2) {
    const page_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx_r4.formData)("sectionData", page_r2);
} }
function PageComponent_div_10_app_custom_tabular_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-tabular", 14);
} if (rf & 2) {
    const page_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabularData", page_r2.childrens);
} }
function PageComponent_div_10_app_custom_table_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendFormData", function PageComponent_div_10_app_custom_table_4_Template_app_custom_table_sendFormData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.sendFormData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx_r6.formData)("tabularData", page_r2)("reloadTable", ctx_r6.checkReloadTable);
} }
function PageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageComponent_div_10_app_custom_section_1_Template, 1, 4, "app-custom-section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageComponent_div_10_app_custom_section_2_Template, 1, 2, "app-custom-section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageComponent_div_10_app_custom_tabular_3_Template, 1, 1, "app-custom-tabular", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageComponent_div_10_app_custom_table_4_Template, 1, 3, "app-custom-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-lg-", page_r2.element_size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r2.element_type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r2.element_type == "add-child");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r2.element_type == "tabular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r2.element_type == "table");
} }
class PageComponent {
    constructor() {
        this.program_id = "0";
        this.reloadStatus = false;
        this.checkReloadTable = 0;
    }
    ngOnInit() {
        console.log(this.pageData);
        this.program_id = localStorage.getItem('history');
    }
    reload(event) {
        this.checkReloadTable++;
    }
    sendFormData(data) {
        this.submittedData = data;
        this.reloadStatus = !this.reloadStatus;
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], inputs: { pageData: "pageData", formData: "formData" }, decls: 11, vars: 4, consts: [[1, "d-flex", "justify-content-between", "ml-3", "mr-3", "mt-3"], ["src", "assets/images/image1.jpeg", "height", "80", 4, "ngIf"], [1, "float-right"], [1, "page-title", "text-center"], [1, "text-muted", "text-center", "subtitle"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], ["src", "assets/images/image1.jpeg", "height", "80"], [3, "formData", "submittedData", "sectionData", "reloadStatus", "reloadTable", 4, "ngIf"], [3, "formData", "sectionData", 4, "ngIf"], [3, "tabularData", 4, "ngIf"], [3, "formData", "tabularData", "reloadTable", "sendFormData", 4, "ngIf"], [3, "formData", "submittedData", "sectionData", "reloadStatus", "reloadTable"], [3, "formData", "sectionData"], [3, "tabularData"], [3, "formData", "tabularData", "reloadTable", "sendFormData"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageComponent_img_2_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PageComponent_div_10_Template, 5, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.program_id == "108");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageData.element_data.element_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pageData.element_data.element_subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageData.childrens);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_2__["CustomSectionComponent"], _custom_tabular_custom_tabular_component__WEBPACK_IMPORTED_MODULE_3__["CustomTabularComponent"], _custom_table_custom_table_component__WEBPACK_IMPORTED_MODULE_4__["CustomTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PMiU":
/*!***************************************************************************!*\
  !*** ./src/app/quiz/custom-quiz-display/custom-quiz-display.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomQuizDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomQuizDisplayComponent", function() { return CustomQuizDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomQuizDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomQuizDisplayComponent.ɵfac = function CustomQuizDisplayComponent_Factory(t) { return new (t || CustomQuizDisplayComponent)(); };
CustomQuizDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomQuizDisplayComponent, selectors: [["app-custom-quiz-display"]], decls: 2, vars: 0, template: function CustomQuizDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "custom-quiz-display works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tcXVpei1kaXNwbGF5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        // { queryParams: { returnUrl: state.url }}
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Rz0q":
/*!**********************************************************!*\
  !*** ./src/app/login-iimpact/login-iimpact.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginIimpactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginIimpactComponent", function() { return LoginIimpactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");





class LoginIimpactComponent {
    constructor(formBuilder, route, router, ServerService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.ServerService = ServerService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = '/data-entry/1/1';
        $(".selectpicker").selectpicker('refresh');
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.ServerService.login(this.f.email.value, this.f.password.value, 2).then((data) => {
            console.log(data);
            // if (data[0]['is_active'] != 1) {
            //   Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Incorrect User Name or password!'
            //   })
            // } else {
            //const program = JSON.stringify(data[0]['program']);
            localStorage.setItem('user_id', data[0]['user_id']);
            localStorage.setItem('block_name', data[0]['block_name']);
            localStorage.setItem('district_name', data[0]['district_name']);
            localStorage.setItem('state_name', data[0]['state_name']);
            localStorage.setItem('name', data[0]['lc_name']);
            localStorage.setItem('lc_code', data[0]['lc_code']);
            localStorage.setItem('pngo', data[0]['pngo']);
            localStorage.setItem('is_tracker', '0');
            localStorage.setItem('history', '1');
            //localStorage.setItem('Program', program);
            localStorage.setItem('project', '2');
            this.router.navigate([this.returnUrl]);
            //}
        }).catch((err) => {
            console.log(err);
            this.error = err;
            this.loading = false;
        });
    }
}
LoginIimpactComponent.ɵfac = function LoginIimpactComponent_Factory(t) { return new (t || LoginIimpactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"])); };
LoginIimpactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginIimpactComponent, selectors: [["app-login-iimpact"]], decls: 28, vars: 1, consts: [[1, "account-pages", "mt-5", "mb-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "bg-pattern"], [1, "card-body", "p-4"], [1, "text-center", "w-75", "m-auto"], ["routerLink", "/login"], ["src", "assets/images/iimpact.jpg", "alt", "", "height", "82", 1, "prathamLogoHeightWidth"], [1, "text-muted", "mb-4", "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "emailaddress"], ["formControlName", "email", "type", "text", "id", "emailaddress", "required", "", "placeholder", "Enter User Id", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "required", "", "id", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkbox-signin", "checked", "", 1, "custom-control-input"], ["for", "checkbox-signin", 1, "custom-control-label"], [1, "form-group", "mb-0", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"]], template: function LoginIimpactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginIimpactComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1paW1wYWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'data-entry-portal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W1uz":
/*!****************************************************************************!*\
  !*** ./src/app/custom-tabular-textbox/custom-tabular-textbox.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomTabularTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTabularTextboxComponent", function() { return CustomTabularTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CustomTabularTextboxComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CustomTabularTextboxComponent_input_0_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.textInput($event, ctx_r1.tabularTextData); })("keypress", function CustomTabularTextboxComponent_input_0_Template_input_keypress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.isNumberKey($event, ctx_r3.tabularTextData.input_type, ctx_r3.tabularTextData.regex); })("change", function CustomTabularTextboxComponent_input_0_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onTextBoxInputData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.tabularTextData.element_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", true)("maxlength", ctx_r0.tabularTextData.max_val)("max", ctx_r0.tabularTextData.max_val)("min", ctx_r0.tabularTextData.min_val);
} }
class CustomTabularTextboxComponent {
    constructor() {
        // @Input()
        // elementData:ElementModel;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.tippyProps = {
            arrow: true,
            placement: 'top',
            theme: 'translucent'
        };
    }
    ngOnInit() {
        setTimeout(() => {
            $('.flatpickr-input').flatpickr({
                altInput: true,
                altFormat: 'd-m-Y'
            });
            $('.flatpickr-input-range').flatpickr({
                altInput: true,
                altFormat: 'd-m-Y'
            });
        }, 1000);
    }
    onTextBoxInputData(event) {
        // console.log(this.elementData);
        this.tabularTextData.element_value = event.target.value;
        this.action.emit(this.tabularTextData);
    }
    isNumberKey(evt, input_type, regex) {
        this.removeErrorHighlight();
        var regexValidate = new RegExp(regex);
        if (input_type == 'number') {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
        else {
            return true;
        }
    }
    textInput(evt, element) {
        //console.log(element);
        if (element.operation == 'sum') {
            let dependant = element.operator;
            if (dependant != undefined) {
                let otherTotal = 0;
                let dependentID = dependant.split(',');
                dependentID.forEach(ele => {
                    let value = $('#' + ele).val();
                    if (value != '' && !isNaN(value)) {
                        otherTotal += parseInt(value);
                    }
                });
                $('#' + element.operator_result).val(otherTotal);
            }
        }
        if (element.dependant == 'less than equal' || element.dependant == 'less' || element.dependant == 'equal') {
            let dependant = element.dependent_operator;
            let total = $('#' + element.dependent_result).val();
            if (dependant != undefined) {
                let otherTotal = 0;
                let dependentID = dependant.split(',');
                dependentID.forEach(ele => {
                    let value = $('#' + ele).val();
                    if (value != '' && !isNaN(value)) {
                        otherTotal += parseInt(value);
                    }
                });
                if (otherTotal > total) {
                    let currentVal = $(evt.target).val();
                    currentVal = currentVal / 10;
                    $(evt.target).val(~~currentVal);
                    $('#' + element.element_id).removeClass('form-control-focus').addClass('highlight');
                    setTimeout(() => {
                        $('.highlight').addClass('form-control-focus').removeClass('highlight');
                    }, 1000);
                }
            }
        }
        this.tabularTextData.element_value = $('#' + element.element_id).val();
        //this.removeErrorHighlight()
    }
    errorHighlight(id) {
        $('#' + id).removeClass('form-control-focus').addClass('highlight');
    }
    removeErrorHighlight() {
        $('.highlight').addClass('form-control-focus').removeClass('highlight');
    }
    errorToastr(txt = "Oh Snap !!!", heading = "Error", bgColor = "blue", txtColor = "#eee", textAlignment = "right", pos = "top-right", icon = "error") {
        $.toast({
            heading: "<strong>" + heading + "</strong>",
            text: txt,
            showHideTransition: 'slide',
            bgColor: '#bf441d',
            textColor: '#eee',
            allowToastClose: false,
            hideAfter: 5000,
            stack: 5,
            textAlign: 'left',
            position: 'top-right',
            icon: 'error',
            loaderBg: '#fff'
        });
    }
}
CustomTabularTextboxComponent.ɵfac = function CustomTabularTextboxComponent_Factory(t) { return new (t || CustomTabularTextboxComponent)(); };
CustomTabularTextboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTabularTextboxComponent, selectors: [["app-custom-tabular-textbox"]], inputs: { tabularTextData: "tabularTextData" }, outputs: { action: "action" }, decls: 1, vars: 1, consts: [["type", "text", "class", "form-control", "class", "form-control", 3, "id", "input", "keypress", "change", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "id", "input", "keypress", "change"]], template: function CustomTabularTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomTabularTextboxComponent_input_0_Template, 1, 5, "input", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabularTextData.element_type == "ElementText");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["input[type=\"text\"][_ngcontent-%COMP%]:disabled{background-color:#eae9f5;}\r\n.highlight[_ngcontent-%COMP%]{\r\n  border-color: red !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px red !important;\r\n}\r\n.highlight[_ngcontent-%COMP%]:focus{\r\n  border-color: red !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px red !important;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n  min-width: 80px !important\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS10YWJ1bGFyLXRleHRib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1o7OzRDQUU0QztBQUU1Qyw0QkFBNEIsd0JBQXdCLENBQUM7QUFFckQ7RUFDRSw0QkFBNEI7RUFFNUIsb0VBQW9FO0FBQ3RFO0FBRUE7RUFDRSw0QkFBNEI7RUFFNUIsb0VBQW9FO0FBQ3RFO0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImN1c3RvbS10YWJ1bGFyLXRleHRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBUaGVtZXMgKi9cclxuLyogQGltcG9ydCAndGlwcHkuanMvdGhlbWVzL2xpZ2h0LWJvcmRlci5jc3MnO1xyXG5AaW1wb3J0ICd0aXBweS5qcy90aGVtZXMvbGlnaHQuY3NzJztcclxuQGltcG9ydCAndGlwcHkuanMvdGhlbWVzL3RyYW5zbHVjZW50LmNzcyc7ICovXHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlYWU5ZjU7fVxyXG5cclxuLmhpZ2hsaWdodHtcclxuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggcmVkICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQ6Zm9jdXN7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJlZCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "XGnm":
/*!************************************************************!*\
  !*** ./src/app/custom-section/custom-section.component.ts ***!
  \************************************************************/
/*! exports provided: CustomSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSectionComponent", function() { return CustomSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _custom_text_box_custom_text_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-text-box/custom-text-box.component */ "ZoVi");
/* harmony import */ var _custom_dropdown_custom_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-dropdown/custom-dropdown.component */ "0Cur");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-ladda */ "19Fg");
/* harmony import */ var _custom_tabular_custom_tabular_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-tabular/custom-tabular.component */ "BTxV");










function CustomSectionComponent_ng_container_8_div_1_app_custom_text_box_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-text-box", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function CustomSectionComponent_ng_container_8_div_1_app_custom_text_box_1_Template_app_custom_text_box_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementData", element_r1);
} }
function CustomSectionComponent_ng_container_8_div_1_app_custom_dropdown_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function CustomSectionComponent_ng_container_8_div_1_app_custom_dropdown_2_Template_app_custom_dropdown_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.dropDownChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "parent_" + element_r1.element_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx_r4.formData)("elementData", element_r1);
} }
function CustomSectionComponent_ng_container_8_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CustomSectionComponent_ng_container_8_div_1_div_3_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.onTextBoxInputData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSectionComponent_ng_container_8_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSectionComponent_ng_container_8_div_1_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.finalSubmitData(element_r1["element_data"]["submit-url"], element_r1["element_data"]["parameters"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", element_r1.element_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ladda", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1.elementLabel["en"]);
} }
function CustomSectionComponent_ng_container_8_div_1_div_5_div_7_app_custom_text_box_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-text-box", 26);
} if (rf & 2) {
    const section_element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementData", section_element_r23);
} }
function CustomSectionComponent_ng_container_8_div_1_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSectionComponent_ng_container_8_div_1_div_5_div_7_app_custom_text_box_1_Template, 1, 1, "app-custom-text-box", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-md-", section_element_r23.element_size, " d-flex align-items-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_element_r23.element_type == "ElementText" || section_element_r23.element_type == "ElementDate" || section_element_r23.element_type == "ElementDateRange");
} }
function CustomSectionComponent_ng_container_8_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomSectionComponent_ng_container_8_div_1_div_5_div_7_Template, 2, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1.element_data.element_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r1.childrens);
} }
function CustomSectionComponent_ng_container_8_div_1_div_6_div_7_app_custom_text_box_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-text-box", 26);
} if (rf & 2) {
    const section_element_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementData", section_element_r28);
} }
function CustomSectionComponent_ng_container_8_div_1_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSectionComponent_ng_container_8_div_1_div_6_div_7_app_custom_text_box_1_Template, 1, 1, "app-custom-text-box", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-md-", section_element_r28.element_size, " d-flex align-items-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_element_r28.element_type == "ElementText" || section_element_r28.element_type == "ElementDate" || section_element_r28.element_type == "ElementDateRange");
} }
function CustomSectionComponent_ng_container_8_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomSectionComponent_ng_container_8_div_1_div_6_div_7_Template, 2, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1.element_data.element_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r1.childrens);
} }
function CustomSectionComponent_ng_container_8_div_1_app_custom_tabular_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-tabular", 27);
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabularData", element_r1.childrens)("tableDetail", element_r1);
} }
function CustomSectionComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSectionComponent_ng_container_8_div_1_app_custom_text_box_1_Template, 1, 1, "app-custom-text-box", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomSectionComponent_ng_container_8_div_1_app_custom_dropdown_2_Template, 1, 3, "app-custom-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomSectionComponent_ng_container_8_div_1_div_3_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomSectionComponent_ng_container_8_div_1_div_4_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomSectionComponent_ng_container_8_div_1_div_5_Template, 8, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomSectionComponent_ng_container_8_div_1_div_6_Template, 8, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomSectionComponent_ng_container_8_div_1_app_custom_tabular_7_Template, 1, 2, "app-custom-tabular", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-md-", element_r1.element_size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", element_r1.is_dependent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type == "ElementText" || element_r1.element_type == "ElementDate" || element_r1.element_type == "ElementDateRange" || element_r1.element_type == "ElementLabel" || element_r1.element_type == "ElementTextValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type == "ElementDropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type == "ElementHidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type == "ElementButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type == "add-child");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type == "ElementTable");
} }
function CustomSectionComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSectionComponent_ng_container_8_div_1_Template, 8, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r1.element_type != "ElementHidden");
} }
class CustomSectionComponent {
    constructor(serverService) {
        this.serverService = serverService;
        this.unitData = {};
        this.isLoading = false;
        this.error = false;
        this.currentAction = 'insert';
        this.reloadTable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resultData = {};
    }
    ngOnInit() {
        this.unitData = this.formData;
        setTimeout(() => {
            console.log(this.sectionData.childrens);
            this.sectionData.childrens.forEach(element => {
                if (element.element_type == "ElementText" || element.element_type == "ElementHidden") {
                    ////console.log(element.is_editable, element);
                    //$('#'+element.element_id).attr('disabled',true);
                    if (this.unitData != undefined && this.unitData.hasOwnProperty(element.database_param)) {
                        $('#' + element.element_id).val(this.unitData[element.database_param]);
                        if ("is_editable" in element) {
                            $('#' + element.element_id).attr('disabled', element['is_editable'] == "false");
                        }
                        element.element_value = this.unitData[element.database_param];
                    }
                    if (this.unitData != undefined && this.unitData.hasOwnProperty("unit_name") && element.element_id == "SchoolName") {
                        $('#SchoolName').val(this.unitData["unit_name"] + " (" + this.unitData["unit_code"] + ")");
                        if (!element.hasOwnProperty("is_editable"))
                            $('#SchoolName').attr('disabled', true);
                        element.element_value = this.unitData["unit_name"] + " (" + this.unitData["unit_code"] + ")";
                    }
                    //school_name
                    // if(element.database_param=='unit_id'){
                    //   $('#'+element.element_id).val(this.unitData['UnitId']);
                    //   element.element_value = this.unitData['UnitId']
                    // }
                }
                else if (element.element_type == "ElementDate") {
                    if (this.unitData != undefined && this.unitData.hasOwnProperty(element.database_param)) {
                        //console.log(this.unitData[element.database_param]);
                        let dateSelected = moment(this.unitData[element.database_param], 'YYYY-MM-DD').format('DD-MM-YYYY');
                        setTimeout(() => {
                            var picker = $('#' + element.element_id).flatpickr({
                                altInput: true,
                                altFormat: 'd-m-Y',
                                dateFormat: "d-m-Y",
                                defaultDate: dateSelected
                            });
                        }, 1000);
                        if ("is_editable" in element && element['is_editable'] == "false") {
                            picker._input.setAttribute("disabled", "disabled");
                        }
                        element.element_value = dateSelected;
                        console.log(element);
                    }
                }
                else if (element.element_type == "ElementDateRange") {
                    if (this.unitData != undefined && this.unitData.hasOwnProperty(element.database_param)) {
                        var picker = $('#' + element.element_id).flatpickr({
                            altInput: true,
                            altFormat: 'd-m-Y',
                            dateFormat: "d-m-Y",
                            mode: "range",
                            defaultDate: this.unitData[element.database_param]
                        });
                        if ("is_editable" in element && element['is_editable'] == "false") {
                            //$('#'+element.element_id).attr('disabled',!!element['is_editable']);
                            picker._input.setAttribute("disabled", "disabled");
                        }
                        element.element_value = this.unitData[element.database_param];
                    }
                }
                else if (element.element_type == "ElementDropDown") {
                    if (this.unitData != undefined && this.unitData.hasOwnProperty(element.database_param)) {
                        $('#' + element.element_id).selectpicker('val', this.unitData[element.database_param]);
                        if ("is_editable" in element) {
                            $('#' + element.element_id).attr('disabled', element['is_editable'] == "false");
                            $('#' + element.element_id).selectpicker('refresh');
                        }
                        element.element_value = this.unitData[element.database_param];
                    }
                }
                else if (element.element_type == "ElementButton") {
                    console.log(element.element_data.parameters['action']);
                    if (this.unitData != undefined && element.element_data.parameters['action'] == "update") {
                        $('#' + element.element_id).attr('disabled', element['is_editable'] == "false");
                        this.currentAction = "update";
                    }
                }
            });
            this.initializeMask();
        }, 1000);
    }
    ngOnChanges(changes) {
        if (changes.submittedData.currentValue != undefined) {
            this.currentAction = changes.submittedData.currentValue['action'];
        }
        console.log(this.currentAction);
        this.sectionData.childrens.forEach(element => {
            if (element.element_type == "ElementText" || element.element_type == "ElementHidden") {
                ////console.log(element.is_editable, element);
                //$('#'+element.element_id).attr('disabled',true);
                if (this.submittedData != undefined && this.submittedData.hasOwnProperty(element.database_param)) {
                    $('#' + element.element_id).val(this.submittedData[element.database_param]);
                    if ("is_editable" in element) {
                        $('#' + element.element_id).attr('disabled', element['is_editable'] == "false");
                    }
                    element.element_value = this.submittedData[element.database_param];
                }
                if (this.submittedData != undefined && this.submittedData.hasOwnProperty("unit_name") && element.element_id == "SchoolName") {
                    $('#SchoolName').val(this.submittedData["unit_name"] + " (" + this.submittedData["unit_code"] + ")");
                    if (!element.hasOwnProperty("is_editable"))
                        $('#SchoolName').attr('disabled', true);
                    element.element_value = this.submittedData["unit_name"] + " (" + this.submittedData["unit_code"] + ")";
                }
                //school_name
                // if(element.database_param=='unit_id'){
                //   $('#'+element.element_id).val(this.unitData['UnitId']);
                //   element.element_value = this.unitData['UnitId']
                // }
            }
            else if (element.element_type == "ElementDate") {
                if (this.submittedData != undefined && this.submittedData.hasOwnProperty(element.database_param)) {
                    //console.log(this.submittedData[element.database_param], moment(this.submittedData[element.database_param],'YYYY-MM-DD').format('DD-MM-YYYY'));
                    let dateSelected = moment(this.submittedData[element.database_param], 'YYYY-MM-DD').format('DD-MM-YYYY');
                    var picker = $('#' + element.element_id).flatpickr({
                        altInput: true,
                        altFormat: 'd-m-Y',
                        dateFormat: "d-m-Y",
                        defaultDate: dateSelected
                    });
                    //console.log(this.submittedData[element.database_param]);
                    if ("is_editable" in element && element['is_editable'] == "false") {
                        picker._input.setAttribute("disabled", "disabled");
                    }
                    element.element_value = dateSelected;
                    console.log(element);
                }
            }
            else if (element.element_type == "ElementDateRange") {
                if (this.submittedData != undefined && this.submittedData.hasOwnProperty(element.database_param)) {
                    let dateSelected = moment(this.submittedData[element.database_param], 'YYYY-MM-DD').format('DD-MM-YYYY');
                    var picker = $('#' + element.element_id).flatpickr({
                        altInput: true,
                        altFormat: 'd-m-Y',
                        dateFormat: "d-m-Y",
                        mode: "range",
                        defaultDate: dateSelected
                    });
                    if ("is_editable" in element && element['is_editable'] == "false") {
                        //$('#'+element.element_id).attr('disabled',!!element['is_editable']);
                        picker._input.setAttribute("disabled", "disabled");
                    }
                    element.element_value = this.submittedData[element.database_param];
                }
            }
            else if (element.element_type == "ElementDropDown") {
                if (this.submittedData != undefined && this.submittedData.hasOwnProperty(element.database_param)) {
                    $('#' + element.element_id).selectpicker('val', this.submittedData[element.database_param]);
                    if ("is_editable" in element) {
                        $('#' + element.element_id).attr('disabled', element['is_editable'] == "false");
                        $('#' + element.element_id).selectpicker('refresh');
                    }
                    element.element_value = this.submittedData[element.database_param];
                    let dd_change = {
                        "response": [],
                        "selected_id": this.submittedData[element.database_param],
                        "element_id": element.element_id,
                        "elementData": element.elementOptionDependent
                    };
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                        this.dropDownChange(dd_change);
                    }, 1500);
                }
            }
            else if (element.element_type == "ElementButton") {
                $('#' + element.element_id).text('Update');
                if (this.submittedData != undefined && element.element_data.parameters['action'] == "update") {
                    $('#' + element.element_id).attr('disabled', element['is_editable'] == "false");
                }
            }
        });
        this.initializeMask();
    }
    setValue(elementData) {
    }
    dropDownChange(event) {
        var _a;
        //console.log(event);
        this.removeErrorHighlight();
        let elementOptionDependent = event.elementData;
        for (const property in elementOptionDependent) {
            //console.log(property);
            if (property.trim() == event.selected_id) {
                let dependeArr = elementOptionDependent[property].split(",");
                dependeArr.forEach(element => {
                    if ($('#' + element).attr('class') == "selectpicker") {
                        //console.log($('#'+element).parent().parent().parent().parent());
                        $('#' + element).parent().parent().parent().parent().removeAttr('hidden');
                    }
                    else {
                        $('#' + element).parent().parent().parent().removeAttr('hidden');
                    }
                });
            }
            else {
                let dependeArr = elementOptionDependent[property].split(",");
                dependeArr.forEach(element => {
                    if ($('#' + element).attr('class') == "selectpicker") {
                        $('#' + element).parent().parent().parent().parent().attr('hidden', "");
                    }
                    else {
                        $('#' + element).parent().parent().parent().attr('hidden', "");
                    }
                });
            }
        }
        let assessment_cycle = (_a = this.sectionData.childrens.filter(element => element.database_param == 'assessment_cycle')[0]) === null || _a === void 0 ? void 0 : _a.element_value;
        let response = event.response.filter(x => x.child_info_id == event.selected_id)[0];
        let childResponse;
        if (response != undefined && response['child_assessment'] != undefined)
            childResponse = response['child_assessment'].filter(element => element.assessment_cycle == assessment_cycle)[0];
        this.sectionData.childrens.forEach(element => {
            if (element.element_type == "ElementText" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementHidden" || element.element_type == "ElementDropDown") {
                if (response != undefined && response.hasOwnProperty(element.database_param)) {
                    $('#' + element.element_id).val(response[element.database_param]);
                    $('#' + element.element_id).attr('disabled', true);
                    $('#' + element.element_id).selectpicker('refresh');
                    element.element_value = response[element.database_param];
                }
                if (childResponse != undefined && childResponse.hasOwnProperty(element.database_param)) {
                    if (element.element_id != '') {
                        $('#' + element.element_id).val(childResponse[element.database_param]);
                        $('#' + element.element_id).attr('disabled', true);
                        $('#' + element.element_id).selectpicker('refresh');
                    }
                    element.element_value = childResponse[element.database_param];
                }
                if (element.element_id == event.element_id) {
                    element.element_value = event.selected_id;
                }
            }
        });
        var changeAction = event.change_action;
        if (response != undefined && changeAction != undefined) {
            var details = '';
            changeAction.forEach(data => {
                details = response[data['column']];
                var action = data['action'];
                if (action == "hide") {
                    var elementsChange = data['elements'];
                    elementsChange.forEach(element => {
                        if (details == element['element_value']) {
                            this.sectionData.childrens.filter(x => x.element_id == element['element_visible'])[0].is_hidden = "false";
                            this.sectionData.childrens.filter(x => x.element_id == element['element_hidden'])[0].is_hidden = "true";
                        }
                    });
                }
            });
        }
    }
    reset() {
        this.sectionData.childrens.forEach(element => {
            if (element.element_type == "ElementText" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementDropDown") {
                if (element.element_clear != "false") {
                    $('#' + element.element_id).val('');
                    $('#' + element.element_id).selectpicker('refresh').selectpicker('val', '');
                }
            }
        });
    }
    initializeMask() {
        $('[data-toggle="input-mask"]').each(function (a, e) {
            var t = $(e).data("maskFormat"), n = $(e).data("reverse");
            null != n ? $(e).mask(t, {
                reverse: n
            }) : $(e).mask(t);
        });
    }
    validateCondition(row) {
        //console.log(row);
        let condition = row.dependant;
        let operators = row.dependent_operator;
        let operators_result = row.dependent_result;
        //console.log(operators_result);
        if (condition == "less than equal") {
            let total = $('#' + operators_result).val();
            //console.log(total);
            if (operators != undefined) {
                let otherTotal = 0;
                let dependentID = operators.split(',');
                dependentID.forEach(ele => {
                    let value = $('#' + ele).val();
                    //console.log(value, ele);
                    if (value != '' && !isNaN(value)) {
                        otherTotal += parseInt(value);
                    }
                });
                if (otherTotal > total) {
                    this.errorToastr("Allocation Mismatch. Total should be " + total);
                    this.errorMessage = "Allocation Mismatch. Total should be " + total;
                    this.errorHighlight(dependentID[0]);
                    dependentID.forEach(ele => {
                        this.errorHighlight(ele);
                    });
                    this.error = true;
                    //$('#'+dependentID[0]).scrollintoview({ duration: 1000});
                    setTimeout(function () {
                        $('#' + dependentID[0]).focus();
                    });
                }
            }
        }
        else if (condition == "equal") {
            let total = $('#' + operators_result).val();
            //console.log(total);
            if (operators != undefined) {
                let otherTotal = 0;
                let dependentID = operators.split(',');
                //console.log(dependentID);
                dependentID.forEach(ele => {
                    let value = $('#' + ele).val();
                    //console.log($('#'+ele).val());
                    if (value != '' && !isNaN(value)) {
                        otherTotal += parseInt(value);
                    }
                });
                //console.log(otherTotal);
                if (otherTotal != total) {
                    this.errorToastr("Allocation Mismatch. Total should be " + total);
                    this.errorMessage = "Allocation Mismatch. Total should be " + total;
                    //console.log(dependentID[0]);
                    //this.error = true;
                    this.errorHighlight(dependentID[0]);
                    dependentID.forEach(ele => {
                        this.errorHighlight(ele);
                    });
                    this.error = true;
                    //$('#'+dependentID[0]).scrollintoview({ duration: 1000});
                    setTimeout(function () {
                        $('#' + dependentID[0]).focus();
                    });
                }
            }
        }
    }
    validateBlankField(row) {
        //console.log(row.element_id, $('#'+row.element_id).val());
        if ($('#' + row.element_id).val() == "" || $('#' + row.element_id).val() == null) {
            console.log(row.element_id, $('#' + row.element_id).val());
            //$('#'+row.element_id).scrollintoview({ duration: 1000});
            setTimeout(function () {
                $('#' + row.element_id).focus();
            });
            this.errorToastr("Field cannot be blank ");
            this.errorMessage = "Field cannot be blank !";
            this.errorHighlight(row.element_id);
            this.error = true;
        }
    }
    errorToastr(txt = "Oh Snap !!!", heading = "Error", bgColor = "blue", txtColor = "#eee", textAlignment = "right", pos = "top-right", icon = "error") {
        $.toast({
            heading: "<strong>" + heading + "</strong>",
            text: txt,
            showHideTransition: 'slide',
            bgColor: '#bf441d',
            textColor: '#eee',
            allowToastClose: false,
            hideAfter: 5000,
            stack: 5,
            textAlign: 'left',
            position: 'top-right',
            icon: 'error',
            loaderBg: '#fff'
        });
    }
    errorHighlight(id) {
        $('#' + id).removeClass('form-control-focus').addClass('highlight');
        $('#' + id).parent().parent().addClass('highlight');
    }
    removeErrorHighlight() {
        $('.highlight').addClass('form-control-focus').removeClass('highlight');
    }
    finalSubmitData(url, parameters) {
        //console.log(parameters.action);
        this.error = false;
        this.sectionData.childrens.forEach(element => {
            if (this.error == false) {
                if (element.element_type == "ElementText" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementHidden" || element.element_type == "ElementDropDown") {
                    this.validate(element);
                }
                else if (element.element_type == "ElementTable") {
                    element.childrens.forEach(e => {
                        e.childrens.forEach(el => {
                            this.validate(el);
                        });
                    });
                }
            }
        });
        if (!this.error) {
            //this.resultData['action'] = parameters.action
            this.resultData['action'] = this.currentAction;
            console.log(this.resultData);
            this.serverService.sendData(url, this.resultData).then(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'success',
                    title: '',
                    text: 'Data Added Successfully'
                });
                this.isLoading = false;
                //this.reset();
                location.reload();
                this.reloadTable.emit(true);
            }).catch((err) => {
                //console.log(err)
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'warning',
                    title: '',
                    //text: "chk"
                    text: JSON.stringify(err['error'])
                });
                this.isLoading = false;
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'warning',
                title: '',
                text: this.errorMessage
            });
            this.isLoading = false;
        }
    }
    validate(element) {
        if (element.element_type == "ElementText" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementHidden" || element.element_type == "ElementDropDown") {
            if (element.element_type == "ElementDropDown") {
                if ($('#parent_' + element.element_id).parent().attr('hidden')) {
                    // $('#parent_'+element.element_id).prop('disabled', true);
                    // $('#parent_'+element.element_id).selectpicker('refresh');
                    // $('#parent_'+element.element_id).prop('is_required',false);
                }
                else {
                    if (this.error == false) {
                        if (element.is_required == 'true') {
                            this.validateBlankField(element);
                        }
                    }
                    if (this.error == false) {
                        this.validateCondition(element);
                    }
                    if (this.error == false) {
                        this.resultData[element['database_param']] = element.element_value;
                    }
                }
            }
            else if (element.element_type == "ElementText") {
                if ($('#' + element.element_id).parent().parent().parent().attr('hidden')) {
                    //$('#'+element.element_id).prop('required', false);
                }
                else if ((element.input_type == 'number') && (element.is_required == 'true')) {
                    let el_val = parseInt($('#' + element.element_id).val());
                    if (isNaN(el_val)) {
                        //this.error = true;
                        el_val = -1;
                    }
                    if (((element.min_val != '' || element.min_val == '0') && (el_val < element.min_val)) || ((element.max_val != '') && (el_val > element.max_val))) {
                        this.errorHighlight(element.element_id);
                        this.errorToastr(element.elementLabel['en'] + " is between " + element.min_val + " to" + element.max_val);
                        this.errorMessage = element.elementLabel['en'] + " is between " + element.min_val + " to" + element.max_val;
                        //alert(element.elementLabel['en']+" is between "+ element.min_val+" to"+element.max_val);
                        this.error = true;
                    }
                    if (this.error == false) {
                        this.resultData[element['database_param']] = $('#' + element.element_id).val(); //element.element_value
                    }
                }
                else {
                    if (this.error == false) {
                        if (element.is_required == 'true') {
                            this.validateBlankField(element);
                        }
                    }
                    if (this.error == false) {
                        this.validateCondition(element);
                    }
                    if (this.error == false) {
                        //this.resultData[element['database_param']] = element.element_value
                        this.resultData[element['database_param']] = $('#' + element.element_id).val();
                    }
                }
            }
            // else if(element.element_type=="ElementDropDown"){
            //   if(this.error==false){
            //     if(element.is_required=='true'){
            //       this.validateBlankField(element);
            //     }
            //   }
            // }
            else if (element.element_type == "ElementDate") {
                if ($('#' + element.element_id).parent().parent().parent().attr('hidden')) {
                    //$('#'+element.element_id).prop('required', false);
                }
                else {
                    if (this.error == false) {
                        this.validateBlankField(element);
                    }
                    if (this.error == false) {
                        this.validateCondition(element);
                    }
                    if (this.error == false) {
                        console.log(element.element_value, moment(element.element_value, 'DD-MM-YYYY').format('YYYY-MM-DD'));
                        let dateSelected = moment(element.element_value, 'DD-MM-YYYY').format('YYYY-MM-DD');
                        console.log(dateSelected);
                        this.resultData[element['database_param']] = dateSelected;
                    }
                }
            }
            else if (element.element_type == "ElementHidden") {
                if (this.error == false) {
                    this.resultData[element['database_param']] = element.element_value;
                }
            }
        }
    }
}
CustomSectionComponent.ɵfac = function CustomSectionComponent_Factory(t) { return new (t || CustomSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"])); };
CustomSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSectionComponent, selectors: [["app-custom-section"]], inputs: { sectionData: "sectionData", formData: "formData", submittedData: "submittedData", reloadStatus: "reloadStatus" }, outputs: { reloadTable: "reloadTable" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 2, consts: [[1, "row", "row-height"], [1, "col-lg-12"], [1, "card", "border"], [1, "card-body"], ["id", "form1", "novalidate", "", 1, "needs-validation"], [1, "mb-3", "header-title"], [1, "row"], [4, "ngFor", "ngForOf"], [3, "class", "hidden", 4, "ngIf"], [3, "hidden"], [3, "elementData", "action", 4, "ngIf"], [3, "formData", "elementData", "id", "action", 4, "ngIf"], ["class", "form-group mb-3", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [3, "tabularData", "tableDetail", 4, "ngIf"], [3, "elementData", "action"], [3, "formData", "elementData", "id", "action"], [1, "form-group", "mb-3"], ["type", "hidden", "id", "simpleinput", "data-toggle", "input-mask", "data-mask-format", "0000-00-00", 1, "form-control", 3, "input"], [1, "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-outline-primary", "waves-effect", "waves-light", "d-flex", "justify-content-center", 3, "id", "ladda", "click"], [1, "row", "mt-3"], [1, "card", "border", "primary-border"], [3, "class", 4, "ngFor", "ngForOf"], [3, "elementData", 4, "ngIf"], [3, "elementData"], [3, "tabularData", "tableDetail"]], template: function CustomSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomSectionComponent_ng_container_8_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionData.element_data.element_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionData.childrens);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _custom_text_box_custom_text_box_component__WEBPACK_IMPORTED_MODULE_5__["CustomTextBoxComponent"], _custom_dropdown_custom_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["CustomDropdownComponent"], angular2_ladda__WEBPACK_IMPORTED_MODULE_7__["LaddaDirective"], _custom_tabular_custom_tabular_component__WEBPACK_IMPORTED_MODULE_8__["CustomTabularComponent"]], styles: [".primary-border[_ngcontent-%COMP%]{\r\n  border-color: #fff23d !important;\r\n}\r\n\r\n.row-height[_ngcontent-%COMP%]{\r\n  margin-bottom: 10vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoiY3VzdG9tLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWJvcmRlcntcclxuICBib3JkZXItY29sb3I6ICNmZmYyM2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdy1oZWlnaHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "YpB4":
/*!************************************************!*\
  !*** ./src/app/hp-login/hp-login.component.ts ***!
  \************************************************/
/*! exports provided: HpLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HpLoginComponent", function() { return HpLoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");






class HpLoginComponent {
    constructor(formBuilder, route, router, ServerService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.ServerService = ServerService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = '/unitlist';
        $(".selectpicker").selectpicker('refresh');
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.ServerService.login(this.f.email.value, this.f.password.value, 2).then((data) => {
            if (data['status'] != 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Incorrect email or password!'
                });
            }
            else {
                const program = JSON.stringify(data['program']);
                localStorage.setItem('currentUser', data['user_details'].email);
                localStorage.setItem('BlockId', data['user_details'].BlockId);
                localStorage.setItem('userId', data['user_details'].userId);
                localStorage.setItem('name', data['user_details'].name);
                localStorage.setItem('is_tracker', data['program'][0]['is_tracker']);
                localStorage.setItem('Program', program);
                this.router.navigate([this.returnUrl]);
            }
        }).catch((err) => {
            console.log(err);
            this.error = err;
            this.loading = false;
        });
    }
}
HpLoginComponent.ɵfac = function HpLoginComponent_Factory(t) { return new (t || HpLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"])); };
HpLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HpLoginComponent, selectors: [["app-hp-login"]], decls: 28, vars: 1, consts: [[1, "account-pages", "mt-5", "mb-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "bg-pattern"], [1, "card-body", "p-4"], [1, "text-center", "w-75", "m-auto"], ["routerLink", "/login"], ["src", "assets/images/image2.jpeg", "alt", "", "height", "150", 1, "prathamLogoHeightWidth"], [1, "text-muted", "mb-4", "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "emailaddress"], ["formControlName", "email", "type", "text", "id", "emailaddress", "required", "", "placeholder", "Enter User Id", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "required", "", "id", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkbox-signin", "checked", "", 1, "custom-control-input"], ["for", "checkbox-signin", 1, "custom-control-label"], [1, "form-group", "mb-0", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"]], template: function HpLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HpLoginComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJocC1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _child_data_entry_child_data_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-data-entry/child-data-entry.component */ "pC0V");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/page.component */ "No3D");
/* harmony import */ var _custom_text_box_custom_text_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-text-box/custom-text-box.component */ "ZoVi");
/* harmony import */ var _custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-section/custom-section.component */ "XGnm");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _custom_tabular_custom_tabular_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-tabular/custom-tabular.component */ "BTxV");
/* harmony import */ var _custom_tabular_textbox_custom_tabular_textbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-tabular-textbox/custom-tabular-textbox.component */ "W1uz");
/* harmony import */ var _custom_dropdown_custom_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-dropdown/custom-dropdown.component */ "0Cur");
/* harmony import */ var _unitlist_unitlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./unitlist/unitlist.component */ "bX9t");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _custom_table_custom_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custom-table/custom-table.component */ "d9oz");
/* harmony import */ var ngx_tippy_wrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-tippy-wrapper */ "IFLe");
/* harmony import */ var angular_tippy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-tippy */ "uzHY");
/* harmony import */ var _TooltipDirective__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TooltipDirective */ "uTPM");
/* harmony import */ var _file_not_found404_file_not_found404_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./file-not-found404/file-not-found404.component */ "6CW9");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-ladda */ "19Fg");
/* harmony import */ var _summary_sheet_summary_sheet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./summary-sheet/summary-sheet.component */ "ZjjC");
/* harmony import */ var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tracking/tracking.component */ "+hgv");
/* harmony import */ var _create_form_create_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-form/create-form.component */ "f44V");
/* harmony import */ var _hp_login_hp_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hp-login/hp-login.component */ "YpB4");
/* harmony import */ var _quiz_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./quiz/quiz/quiz.component */ "Jhzt");
/* harmony import */ var _quiz_custom_child_info_display_custom_child_info_display_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./quiz/custom-child-info-display/custom-child-info-display.component */ "HzbZ");
/* harmony import */ var _quiz_custom_child_info_create_custom_child_info_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./quiz/custom-child-info-create/custom-child-info-create.component */ "Kz55");
/* harmony import */ var _quiz_custom_quiz_display_custom_quiz_display_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./quiz/custom-quiz-display/custom-quiz-display.component */ "PMiU");
/* harmony import */ var _admin_preview_preview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/preview/preview.component */ "r/Tl");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./attendance/attendance.component */ "JBRV");
/* harmony import */ var _login_direct_login_direct_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./login-direct/login-direct.component */ "8r4/");
/* harmony import */ var _login_iimpact_login_iimpact_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login-iimpact/login-iimpact.component */ "Rz0q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ "fXoL");



































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerModule"],
            ngx_tippy_wrapper__WEBPACK_IMPORTED_MODULE_16__["NgxTippyModule"],
            angular_tippy__WEBPACK_IMPORTED_MODULE_17__["NgTippyModule"],
            angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"],
            angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"].forRoot({
                spinnerSize: 30,
                spinnerColor: "#6658dd",
                spinnerLines: 12
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _child_data_entry_child_data_entry_component__WEBPACK_IMPORTED_MODULE_4__["ChildDataEntryComponent"],
        _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"],
        _custom_text_box_custom_text_box_component__WEBPACK_IMPORTED_MODULE_6__["CustomTextBoxComponent"],
        _custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_7__["CustomSectionComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _custom_tabular_custom_tabular_component__WEBPACK_IMPORTED_MODULE_9__["CustomTabularComponent"],
        _custom_tabular_textbox_custom_tabular_textbox_component__WEBPACK_IMPORTED_MODULE_10__["CustomTabularTextboxComponent"],
        _custom_dropdown_custom_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["CustomDropdownComponent"],
        _unitlist_unitlist_component__WEBPACK_IMPORTED_MODULE_12__["UnitlistComponent"],
        _custom_table_custom_table_component__WEBPACK_IMPORTED_MODULE_15__["CustomTableComponent"],
        _TooltipDirective__WEBPACK_IMPORTED_MODULE_18__["TooltipDirective"],
        _file_not_found404_file_not_found404_component__WEBPACK_IMPORTED_MODULE_19__["FileNotFound404Component"],
        _summary_sheet_summary_sheet_component__WEBPACK_IMPORTED_MODULE_21__["SummarySheetComponent"],
        _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_22__["TrackingComponent"],
        _create_form_create_form_component__WEBPACK_IMPORTED_MODULE_23__["CreateFormComponent"],
        _hp_login_hp_login_component__WEBPACK_IMPORTED_MODULE_24__["HpLoginComponent"],
        _quiz_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_25__["QuizComponent"],
        _quiz_custom_child_info_display_custom_child_info_display_component__WEBPACK_IMPORTED_MODULE_26__["CustomChildInfoDisplayComponent"],
        _quiz_custom_child_info_create_custom_child_info_create_component__WEBPACK_IMPORTED_MODULE_27__["CustomChildInfoCreateComponent"],
        _quiz_custom_quiz_display_custom_quiz_display_component__WEBPACK_IMPORTED_MODULE_28__["CustomQuizDisplayComponent"],
        _admin_preview_preview_component__WEBPACK_IMPORTED_MODULE_29__["PreviewComponent"],
        _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_30__["AttendanceComponent"],
        _login_direct_login_direct_component__WEBPACK_IMPORTED_MODULE_31__["LoginDirectComponent"],
        _login_iimpact_login_iimpact_component__WEBPACK_IMPORTED_MODULE_32__["LoginIimpactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerModule"],
        ngx_tippy_wrapper__WEBPACK_IMPORTED_MODULE_16__["NgxTippyModule"],
        angular_tippy__WEBPACK_IMPORTED_MODULE_17__["NgTippyModule"],
        angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"], angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"]] }); })();


/***/ }),

/***/ "ZjjC":
/*!**********************************************************!*\
  !*** ./src/app/summary-sheet/summary-sheet.component.ts ***!
  \**********************************************************/
/*! exports provided: SummarySheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummarySheetComponent", function() { return SummarySheetComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SummarySheetComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Data Entry Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SummarySheetComponent {
    constructor(spinner, _router, _service, route) {
        this.spinner = spinner;
        this._router = _router;
        this._service = _service;
        this.route = route;
        this.elements = [];
        this.ProgramData = [];
        this.Action_button = [];
        this.programName = '';
        this.route.params.subscribe(event => {
            this.programId = event.program_id;
            this.project = localStorage.getItem('project');
        });
    }
    onPopState(event) {
        setTimeout(() => {
            let history = localStorage.getItem('history');
            console.log(history);
            if (history == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    title: 'Logout',
                    text: 'Are you sure you want to logout?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Logout!',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.value) {
                        this.logout();
                    }
                    else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.DismissReason.cancel) {
                    }
                });
            }
            this._router.navigate([`unitlist`]);
            localStorage.setItem('history', '');
        }, 50);
    }
    ngOnInit() {
        $(".camp1").addClass('border border-primary');
        $(".camp2").attr("disabled", true);
        $(".camp3").attr("disabled", true);
        $(".camp4").attr("disabled", true);
        $(".con").attr("disabled", true);
        $(".endline").attr("disabled", true);
    }
    logout() {
        this._service.logout();
        this._router.navigate([`login`]);
    }
    // Table 1 Validation start here 
    check_target_male(event) {
        this.target_male = event.target.value;
        if (this.target_male > 150) {
            $("#target_male").addClass("border border-danger");
            //alert("Max Male will be 150");
        }
        else {
            $("#target_male").removeClass("border border-danger");
        }
    }
    check_target_female(event) {
        this.target_female = event.target.value;
        if (this.target_female > 150) {
            $("#target_female").addClass("border border-danger");
            //alert("Max Female will be 150");
        }
        else {
            $("#target_female").removeClass("border border-danger");
        }
    }
    check_Class3(event) {
        this.Class3 = event.target.value;
        if (this.Class3 > 300) {
            $("#Class3").addClass("border border-danger");
            //alert("Max Female will be 300");
        }
        else {
            $("#Class3").removeClass("border border-danger");
        }
    }
    check_Class4(event) {
        this.Class4 = event.target.value;
        if (this.Class4 > 300) {
            $("#Class4").addClass("border border-danger");
            //alert("Max Female will be 300");
        }
        else {
            $("#Class4").removeClass("border border-danger");
        }
    }
    check_Class5(event) {
        this.Class5 = event.target.value;
        if (this.Class5 > 300) {
            $("#Class5").addClass("border border-danger");
            //alert("Max Female will be 300");
        }
        else {
            $("#Class5").removeClass("border border-danger");
        }
        if (((this.target_male) + (this.target_female)) === ((this.Class3) + (this.Class4) + (this.Class5))) {
            $("#target_male").removeClass("border border-danger");
            $("#target_female").removeClass("border border-danger");
            $("#Class3").removeClass("border border-danger");
            $("#Class4").removeClass("border border-danger");
            $("#Class5").removeClass("border border-danger");
        }
        else {
            $("#target_male").addClass("border border-danger");
            $("#target_female").addClass("border border-danger");
            $("#Class3").addClass("border border-danger");
            $("#Class4").addClass("border border-danger");
            $("#Class5").addClass("border border-danger");
        }
    }
    check_No_of_teacher(event) {
        this.No_of_teacher = event.target.value;
        if (this.No_of_teacher > 10) {
            $("#No_of_teacher").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#No_of_teacher").removeClass("border border-danger");
        }
    }
    check_daya_camp1(event) {
        this.days_camp1 = event.target.value;
        if (this.days_camp1 > 10) {
            $("#days_camp1").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#days_camp1").removeClass("border border-danger");
        }
    }
    check_daya_camp2(event) {
        this.days_camp2 = event.target.value;
        if (this.days_camp2 > 10) {
            $("#days_camp2").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#days_camp2").removeClass("border border-danger");
        }
    }
    check_daya_camp3(event) {
        this.days_camp3 = event.target.value;
        if (this.days_camp3 > 10) {
            $("#days_camp3").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#days_camp3").removeClass("border border-danger");
        }
    }
    check_daya_camp4(event) {
        this.days_camp4 = event.target.value;
        if (this.days_camp4 > 10) {
            $("#days_camp4").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#days_camp4").removeClass("border border-danger");
        }
    }
    check_govt_school(event) {
        this.govt_school = event.target.value;
        if (this.govt_school > 10) {
            $("#govt_school").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#govt_school").removeClass("border border-danger");
        }
    }
    check_pvt_school(event) {
        this.pvt_school = event.target.value;
        if (this.pvt_school > 10) {
            $("#pvt_school").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#pvt_school").removeClass("border border-danger");
        }
    }
    check_other_school(event) {
        this.other_school = event.target.value;
        if (this.other_school > 10) {
            $("#other_school").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#other_school").removeClass("border border-danger");
        }
    }
    // Table 2 Validation start here 
    // Table 7 Validation start here 
    state_head_visit_camp1(event) {
        this.Camp1_Govt = event.target.value;
        if (this.Camp1_Govt > 10) {
            $("#Camp1_Govt").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp1_Govt").removeClass("border border-danger");
        }
    }
    srg_visit_camp1(event) {
        this.Camp1_SRGs = event.target.value;
        if (this.Camp1_SRGs > 10) {
            $("#Camp1_SRGs").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp1_SRGs").removeClass("border border-danger");
        }
    }
    bc_visit_camp1(event) {
        this.Camp1_BCs = event.target.value;
        if (this.Camp1_BCs > 10) {
            $("#Camp1_BCs").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp1_BCs").removeClass("border border-danger");
        }
    }
    mme_visit_camp1(event) {
        this.Camp1_MME = event.target.value;
        if (this.Camp1_MME > 10) {
            $("#Camp1_MME").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp1_MME").removeClass("border border-danger");
        }
    }
    community_visit_camp1(event) {
        this.Camp1_Community = event.target.value;
        if (this.Camp1_Community > 10) {
            $("#Camp1_Community").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp1_Community").removeClass("border border-danger");
        }
    }
    other_visit_camp1(event) {
        this.Camp1_Others = event.target.value;
        if (this.Camp1_Others > 10) {
            $("#Camp1_Others").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp1_Others").removeClass("border border-danger");
        }
    }
    state_head_visit_camp2(event) {
        this.Camp2_Govt = event.target.value;
        if (this.Camp2_Govt > 10) {
            $("#Camp2_Govt").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp2_Govt").removeClass("border border-danger");
        }
    }
    srg_visit_camp2(event) {
        this.Camp2_Govt = event.target.value;
        if (this.Camp2_Govt > 10) {
            $("#Camp2_Govt").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp2_Govt").removeClass("border border-danger");
        }
    }
    bc_visit_camp2(event) {
        this.Camp2_BCs = event.target.value;
        if (this.Camp2_BCs > 10) {
            $("#Camp2_BCs").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp2_BCs").removeClass("border border-danger");
        }
    }
    mme_visit_camp2(event) {
        this.Camp2_MME = event.target.value;
        if (this.Camp2_MME > 10) {
            $("#Camp2_MME").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp2_MME").removeClass("border border-danger");
        }
    }
    community_visit_camp2(event) {
        this.Camp2_Community = event.target.value;
        if (this.Camp2_Community > 10) {
            $("#Camp2_Community").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp2_Community").removeClass("border border-danger");
        }
    }
    other_visit_camp2(event) {
        this.Camp2_Others = event.target.value;
        if (this.Camp2_Others > 10) {
            $("#Camp2_Others").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp2_Others").removeClass("border border-danger");
        }
    }
    state_head_visit_camp3(event) {
        this.Camp3_Govt = event.target.value;
        if (this.Camp3_Govt > 10) {
            $("#Camp3_Govt").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp3_Govt").removeClass("border border-danger");
        }
    }
    srg_visit_camp3(event) {
        this.Camp3_SRGs = event.target.value;
        if (this.Camp3_SRGs > 10) {
            $("#Camp3_SRGs").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp3_SRGs").removeClass("border border-danger");
        }
    }
    bc_visit_camp3(event) {
        this.Camp3_BCs = event.target.value;
        if (this.Camp3_BCs > 10) {
            $("#Camp3_BCs").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp3_BCs").removeClass("border border-danger");
        }
    }
    mme_visit_camp3(event) {
        this.Camp3_MME = event.target.value;
        if (this.Camp3_MME > 10) {
            $("#Camp3_MME").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp3_MME").removeClass("border border-danger");
        }
    }
    community_visit_camp3(event) {
        this.Camp3_Community = event.target.value;
        if (this.Camp3_Community > 10) {
            $("#Camp3_Community").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp3_Community").removeClass("border border-danger");
        }
    }
    other_visit_camp3(event) {
        this.Camp3_Others = event.target.value;
        if (this.Camp3_Others > 10) {
            $("#Camp3_Others").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp3_Others").removeClass("border border-danger");
        }
    }
    state_head_visit_camp4(event) {
        this.Camp4_Govt = event.target.value;
        if (this.Camp4_Govt > 10) {
            $("#Camp4_Govt").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp4_Govt").removeClass("border border-danger");
        }
    }
    srg_visit_camp4(event) {
        this.Camp4_SRGs = event.target.value;
        if (this.Camp4_SRGs > 10) {
            $("#Camp4_SRGs").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp4_SRGs").removeClass("border border-danger");
        }
    }
    bc_visit_camp4(event) {
        this.Camp4_BCs = event.target.value;
        if (this.Camp4_BCs > 10) {
            $("#Camp4_BCs").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp4_BCs").removeClass("border border-danger");
        }
    }
    mme_visit_camp4(event) {
        this.Camp4_MME = event.target.value;
        if (this.Camp4_MME > 10) {
            $("#Camp4_MME").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp4_MME").removeClass("border border-danger");
        }
    }
    community_visit_camp4(event) {
        this.Camp4_Community = event.target.value;
        if (this.Camp4_Community > 10) {
            $("#Camp4_Community").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp4_Community").removeClass("border border-danger");
        }
    }
    other_visit_camp4(event) {
        this.Camp4_Others = event.target.value;
        if (this.Camp4_Others > 10) {
            $("#Camp4_Others").addClass("border border-danger");
            //alert("Max Female will be 10");
        }
        else {
            $("#Camp4_Others").removeClass("border border-danger");
        }
    }
}
SummarySheetComponent.ɵfac = function SummarySheetComponent_Factory(t) { return new (t || SummarySheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SummarySheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SummarySheetComponent, selectors: [["app-summary-sheet"]], hostBindings: function SummarySheetComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("popstate", function SummarySheetComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 1514, vars: 2, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, "logo-box"], ["href", "index-2.html", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54"], [1, "list-unstyled", "topnav-menu", "float-right", "mb-0", 3, "ngModel"], [1, "dropdown", "notification-list"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "false", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "nav-user", "mr-0", "waves-effect", "waves-light", 2, "color", "#fabc09"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "fa-2x"], [1, "pro-user-name", "ml-1"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right", "profile-dropdown"], ["href", "/tracking", "class", "dropdown-item notify-item cursor-pointer", 4, "ngIf"], [1, "dropdown-item", "notify-item", "cursor-pointer", 3, "click"], [1, "fe-log-out"], [1, "content-page"], [1, "content"], ["method", "post", "id", "summary_form"], ["id", "table_1", 1, "table", "table-bordered"], ["colspan", "16"], ["colspan", "2"], ["title", "", "id", "Unitcode", "name", "Unitcode", 1, "form-control", "camp1"], ["value", "PUK0250004-A"], ["title", "", "data-rule-required", "true", "id", "Camp_Phase_no", "name", "Camp_Phase_no", 1, "form-control", "camp1"], ["value", ""], ["value", "One"], ["value", "Two"], ["value", "Three"], ["value", "Four"], ["value", "Five"], ["value", "Six"], ["title", "", "data-rule-required", "true", "id", "camp_type", "name", "camp_type", 1, "form-control", "camp1"], ["value", "Regular-3camp"], ["value", "Regular-4Camp"], ["value", "FollowUp"], ["title", "", "data-rule-required", "true", "id", "camp_run_in", "name", "camp_run_in", 1, "form-control", "camp1"], ["value", "School"], ["value", "Community"], ["title", "", "data-rule-required", "true", "id", "School_name", "name", "School_name", 1, "form-control", "camp1"], ["value", "GPS Aashanpul"], ["title", "", "data-rule-required", "true", "id", "VillageName", "name", "VillageName", 1, "form-control", "camp1"], ["value", "AASANPUL"], ["colspan", "4"], ["colspan", "3"], ["title", "", "data-rule-required", "true", "id", "DiseCode", "name", "DiseCode", 1, "form-control", "camp1"], ["value", "5050314502"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,99", "type", "Text", "id", "target_male", "name", "target_male", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,99", "type", "Text", "id", "target_female", "name", "target_female", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Class3", "name", "Class3", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Class4", "name", "Class4", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Class5", "name", "Class5", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "id", "Class_X", "name", "Class_X", 1, "form-control", "camp1"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "NA"], ["colspan", "1"], ["title", "", "data-rule-required", "true", "id", "Class_Y", "name", "Class_Y", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,25", "type", "Text", "id", "No_of_teacher", "name", "No_of_teacher", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["data-rule-required", "true", "type", "Date", "id", "start_date_camp1", "name", "start_date_camp1", "value", "", 1, "form-control", "camp1", 2, "min-width", "50px"], ["data-rule-required", "true", "type", "Date", "id", "end_date_camp1", "name", "end_date_camp1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "1,70", "type", "Text", "id", "days_camp1", "name", "days_camp1", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "id", "ddlbrgname", "name", "ddlbrgname", 1, "form-control", "camp1"], ["value", "Guddi "], ["colspan", "3", "rowspan", "3"], ["rowspan", "2"], ["data-rule-required", "true", "type", "Date", "id", "start_date_camp2", "name", "start_date_camp2", "value", "", 1, "form-control", "camp2", 2, "min-width", "50px"], ["data-rule-required", "true", "type", "Date", "id", "end_date_camp1", "name", "end_date_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "1,70", "type", "Text", "id", "days_camp2", "name", "days_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "id", "ddlbrgname", "name", "ddlbrgname", 1, "form-control", "camp2"], ["data-rule-required", "true", "type", "Date", "id", "start_date_camp3", "name", "start_date_camp3", "value", "", 1, "form-control", "camp3", 2, "min-width", "50px"], ["data-rule-required", "true", "type", "Date", "id", "end_date_camp1", "name", "end_date_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "1,70", "type", "Text", "id", "days_camp3", "name", "days_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "id", "ddlbrgname", "name", "ddlbrgname", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,25", "type", "Text", "id", "govt_school", "name", "govt_school", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,25", "type", "Text", "id", "pvt_school", "name", "pvt_school", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,25", "type", "Text", "id", "other_school", "name", "other_school", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["data-rule-required", "true", "type", "Date", "id", "start_date_camp4", "name", "start_date_camp4", "value", "", 1, "form-control", "camp4", 2, "min-width", "50px"], ["data-rule-required", "true", "type", "Date", "id", "end_date_camp1", "name", "end_date_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "1,70", "type", "Text", "id", "days_camp4", "name", "days_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "id", "ddlbrgname", "name", "ddlbrgname", 1, "form-control", "camp4"], ["id", "table_2", 1, "table", "table-bordered"], ["colspan", "10"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_0_20_camp1", "name", "attendance_0_20_camp1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_0_20_camp2", "name", "attendance_0_20_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_0_20_camp3", "name", "attendance_0_20_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_0_20_camp4", "name", "attendance_0_20_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_0_20_con", "name", "attendance_0_20_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_21_50_camp1", "name", "attendance_21_50_camp1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_21_50_camp2", "name", "attendance_21_50_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_21_50_camp3", "name", "attendance_21_50_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_21_50_camp4", "name", "attendance_21_50_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_21_50_con", "name", "attendance_21_50_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_51_70_camp1", "name", "attendance_51_70_camp1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_51_70_camp2", "name", "attendance_51_70_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_51_70_camp3", "name", "attendance_51_70_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_51_70_camp4", "name", "attendance_51_70_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_51_70_con", "name", "attendance_51_70_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_71_100_camp1", "name", "attendance_71_100_camp1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_71_100_camp2", "name", "attendance_71_100_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_71_100_camp3", "name", "attendance_71_100_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_71_100_camp4", "name", "attendance_71_100_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_71_100_con", "name", "attendance_71_100_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_total_camp1", "name", "attendance_total_camp1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_total_camp2", "name", "attendance_total_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_total_camp3", "name", "attendance_total_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_total_camp4", "name", "attendance_total_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "attendance_total_con", "name", "attendance_total_con", "value", "", 1, "form-control", "con"], [1, "table", "table-bordered"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "family_visit_camp1", "name", "family_visit_camp1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "family_visit_camp2", "name", "family_visit_camp2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "family_visit_camp3", "name", "family_visit_camp3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "family_visit_camp4", "name", "family_visit_camp4", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "family_visit_con", "name", "family_visit_con", "value", "", 1, "form-control", "con"], ["id", "table_3", 1, "table", "table-bordered"], ["title", "", "id", "Type_1", "name", "Type_1", 1, "form-control", "camp1"], ["value", "Volunteer"], ["value", "Teacher"], ["title", "", "id", "Type_1_High_edu", "name", "Type_1_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_1_Camp_1", "name", "Type_1_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_1_Camp_2", "name", "Type_1_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_1_Camp_3", "name", "Type_1_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_1_Camp_4", "name", "Type_1_Camp_4", "value", "", 1, "form-control", "camp4"], ["title", "", "id", "Type_2", "name", "Type_2", 1, "form-control", "camp1"], ["title", "", "id", "Type_2_High_edu", "name", "Type_2_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_2_Camp_1", "name", "Type_2_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_2_Camp_2", "name", "Type_2_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_2_Camp_3", "name", "Type_2_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_2_Camp_4", "name", "Type_2_Camp_4", "value", "", 1, "form-control", "camp4"], ["title", "", "id", "Type_3", "name", "Type_3", 1, "form-control", "camp1"], ["title", "", "id", "Type_3_High_edu", "name", "Type_3_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_3_Camp_1", "name", "Type_3_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_3_Camp_2", "name", "Type_3_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_3_Camp_3", "name", "Type_3_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_3_Camp_4", "name", "Type_3_Camp_4", "value", "", 1, "form-control", "camp4"], ["title", "", "id", "Type_4", "name", "Type_4", 1, "form-control", "camp1"], ["title", "", "id", "Type_4_High_edu", "name", "Type_4_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_4_Camp_1", "name", "Type_4_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_4_Camp_2", "name", "Type_4_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_4_Camp_3", "name", "Type_4_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_4_Camp_4", "name", "Type_4_Camp_4", "value", "", 1, "form-control", "camp4"], ["title", "", "id", "Type_5", "name", "Type_5", 1, "form-control", "camp1"], ["title", "", "id", "Type_5_High_edu", "name", "Type_5_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_5_Camp_1", "name", "Type_5_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_5_Camp_2", "name", "Type_5_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_5_Camp_3", "name", "Type_5_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_5_Camp_4", "name", "Type_5_Camp_4", "value", "", 1, "form-control", "camp4"], ["title", "", "id", "Type_6", "name", "Type_6", 1, "form-control", "camp1"], ["title", "", "id", "Type_6_High_edu", "name", "Type_6_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_6_Camp_1", "name", "Type_6_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_6_Camp_2", "name", "Type_6_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_6_Camp_3", "name", "Type_6_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_6_Camp_4", "name", "Type_6_Camp_4", "value", "", 1, "form-control", "camp4"], ["title", "", "id", "Type_7", "name", "Type_7", 1, "form-control", "camp1"], ["title", "", "id", "Type_7_High_edu", "name", "Type_7_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_7_Camp_1", "name", "Type_7_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_7_Camp_2", "name", "Type_7_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_7_Camp_3", "name", "Type_7_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_7_Camp_4", "name", "Type_7_Camp_4", "value", "", 1, "form-control", "camp4"], ["title", "", "id", "Type_8", "name", "Type_8", 1, "form-control", "camp1"], ["title", "", "id", "Type_8_High_edu", "name", "Type_8_High_edu", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_8_Camp_1", "name", "Type_8_Camp_1", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_8_Camp_2", "name", "Type_8_Camp_2", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_8_Camp_3", "name", "Type_8_Camp_3", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-digits", "true", "data-rule-range", "0,250", "type", "Text", "id", "Type_8_Camp_4", "name", "Type_8_Camp_4", "value", "", 1, "form-control", "camp4"], ["id", "table_4", 1, "table", "table-bordered"], ["colspan", "18"], ["colspan", "2", "rowspan", "2"], ["colspan", "5"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_enr_class3", "name", "ucl_enr_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_tested_class3", "name", "ucl_tested_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class3_2017", "name", "ucl_target_class3_2017", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class3_2018", "name", "ucl_target_class3_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class3_2017_2018", "name", "ucl_target_class3_2017_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_beg_class3", "name", "ucl_rd_beg_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_letter_class3", "name", "ucl_rd_letter_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_word_class3", "name", "ucl_rd_word_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_para_class3", "name", "ucl_rd_para_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_story_class3", "name", "ucl_rd_story_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_beg_class3", "name", "ucl_nr_beg_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_1dig_class3", "name", "ucl_nr_1dig_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_2dig_class3", "name", "ucl_nr_2dig_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_3dig_class3", "name", "ucl_nr_3dig_class3", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_enr_class4", "name", "ucl_enr_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_tested_class4", "name", "ucl_tested_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class4_2017", "name", "ucl_target_class4_2017", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class4_2018", "name", "ucl_target_class4_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class4_2017_2018", "name", "ucl_target_class4_2017_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_beg_class4", "name", "ucl_rd_beg_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_letter_class4", "name", "ucl_rd_letter_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_word_class4", "name", "ucl_rd_word_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_para_class4", "name", "ucl_rd_para_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_story_class4", "name", "ucl_rd_story_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_beg_class4", "name", "ucl_nr_beg_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_1dig_class4", "name", "ucl_nr_1dig_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_2dig_class4", "name", "ucl_nr_2dig_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_3dig_class4", "name", "ucl_nr_3dig_class4", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_enr_class5", "name", "ucl_enr_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_tested_class5", "name", "ucl_tested_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class5_2017", "name", "ucl_target_class5_2017", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class5_2018", "name", "ucl_target_class5_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_class5_2017_2018", "name", "ucl_target_class5_2017_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_beg_class5", "name", "ucl_rd_beg_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_letter_class5", "name", "ucl_rd_letter_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_word_class5", "name", "ucl_rd_word_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_para_class5", "name", "ucl_rd_para_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_story_class5", "name", "ucl_rd_story_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_beg_class5", "name", "ucl_nr_beg_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_1dig_class5", "name", "ucl_nr_1dig_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_2dig_class5", "name", "ucl_nr_2dig_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_3dig_class5", "name", "ucl_nr_3dig_class5", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_enr_total", "name", "ucl_enr_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_tested_total", "name", "ucl_tested_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_total_2017", "name", "ucl_target_total_2017", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_total_2018", "name", "ucl_target_total_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_total_2017_2018", "name", "ucl_target_total_2017_2018", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_beg_total", "name", "ucl_rd_beg_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_letter_total", "name", "ucl_rd_letter_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_word_total", "name", "ucl_rd_word_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_para_total", "name", "ucl_rd_para_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_story_total", "name", "ucl_rd_story_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_beg_total", "name", "ucl_nr_beg_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_1dig_total", "name", "ucl_nr_1dig_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_2dig_total", "name", "ucl_nr_2dig_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_3dig_total", "name", "ucl_nr_3dig_total", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_enr_total_after_el1", "name", "ucl_enr_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_tested_total_after_el1", "name", "ucl_tested_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_total_2022_after_el1", "name", "ucl_target_total_2022_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_total_2022_2023_after_el1", "name", "ucl_target_total_2022_2023_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_beg_total_after_el1", "name", "ucl_rd_beg_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_letter_total_after_el1", "name", "ucl_rd_letter_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_word_total_after_el1", "name", "ucl_rd_word_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_para_total_after_el1", "name", "ucl_rd_para_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_story_total_after_el1", "name", "ucl_rd_story_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_beg_total_after_el1", "name", "ucl_nr_beg_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_1dig_total_after_el1", "name", "ucl_nr_1dig_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_2dig_total_after_el1", "name", "ucl_nr_2dig_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_3dig_total_after_el1", "name", "ucl_nr_3dig_total_after_el1", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_enr_total_con", "name", "ucl_enr_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_tested_total_con", "name", "ucl_tested_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_total_2022_con", "name", "ucl_target_total_2022_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_target_total_2022_2023_con", "name", "ucl_target_total_2022_2023_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_beg_total_con", "name", "ucl_rd_beg_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_letter_total_con", "name", "ucl_rd_letter_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_word_total_con", "name", "ucl_rd_word_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_para_total_con", "name", "ucl_rd_para_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_rd_story_total_con", "name", "ucl_rd_story_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_beg_total_con", "name", "ucl_nr_beg_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_1dig_total_con", "name", "ucl_nr_1dig_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_2dig_total_con", "name", "ucl_nr_2dig_total_con", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "ucl_nr_3dig_total_con", "name", "ucl_nr_3dig_total_con", "value", "", 1, "form-control", "con"], ["id", "table_5", 1, "table", "table-bordered"], ["colspan", "23"], ["rowspan", "3"], ["colspan", "8"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_total_tested", "name", "bl_total_tested", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_rd_beg", "name", "bl_rd_beg", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_rd_letter", "name", "bl_rd_letter", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_rd_word", "name", "bl_rd_word", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_rd_para", "name", "bl_rd_para", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_rd_story", "name", "bl_rd_story", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_nr_beg", "name", "bl_nr_beg", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_nr_1dig", "name", "bl_nr_1dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_nr_2dig", "name", "bl_nr_2dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "bl_nr_3dig", "name", "bl_nr_3dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_total_tested", "name", "el1_total_tested", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_rd_beg", "name", "el1_rd_beg", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_rd_letter", "name", "el1_rd_letter", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_rd_word", "name", "el1_rd_word", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_rd_para", "name", "el1_rd_para", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_rd_story", "name", "el1_rd_story", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_nr_beg", "name", "el1_nr_beg", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_nr_1dig", "name", "el1_nr_1dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_nr_2dig", "name", "el1_nr_2dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_nr_3dig", "name", "el1_nr_3dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_add_can", "name", "el1_op_add_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_add_cannot", "name", "el1_op_add_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_sub_can", "name", "el1_op_sub_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_sub_cannot", "name", "el1_op_sub_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_mul_can", "name", "el1_op_mul_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_mul_cannot", "name", "el1_op_mul_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_div_can", "name", "el1_op_div_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_op_div_cannot", "name", "el1_op_div_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_wp_add_can", "name", "el1_wp_add_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_wp_add_cannot", "name", "el1_wp_add_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_wp_sub_can", "name", "el1_wp_sub_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el1_wp_sub_cannot", "name", "el1_wp_sub_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_total_tested", "name", "el2_total_tested", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_rd_beg", "name", "el2_rd_beg", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_rd_letter", "name", "el2_rd_letter", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_rd_word", "name", "el2_rd_word", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_rd_para", "name", "el2_rd_para", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_rd_story", "name", "el2_rd_story", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_nr_beg", "name", "el2_nr_beg", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_nr_1dig", "name", "el2_nr_1dig", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_nr_2dig", "name", "el2_nr_2dig", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_nr_3dig", "name", "el2_nr_3dig", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_add_can", "name", "el2_op_add_can", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_add_cannot", "name", "el2_op_add_cannot", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_sub_can", "name", "el2_op_sub_can", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_sub_cannot", "name", "el2_op_sub_cannot", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_mul_can", "name", "el2_op_mul_can", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_mul_cannot", "name", "el2_op_mul_cannot", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_div_can", "name", "el2_op_div_can", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_op_div_cannot", "name", "el2_op_div_cannot", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_wp_add_can", "name", "el2_wp_add_can", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_wp_add_cannot", "name", "el2_wp_add_cannot", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_wp_sub_can", "name", "el2_wp_sub_can", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el2_wp_sub_cannot", "name", "el2_wp_sub_cannot", "value", "", 1, "form-control", "camp2"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_total_tested", "name", "el3_total_tested", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_rd_beg", "name", "el3_rd_beg", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_rd_letter", "name", "el3_rd_letter", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_rd_word", "name", "el3_rd_word", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_rd_para", "name", "el3_rd_para", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_rd_story", "name", "el3_rd_story", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_nr_beg", "name", "el3_nr_beg", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_nr_1dig", "name", "el3_nr_1dig", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_nr_2dig", "name", "el3_nr_2dig", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_nr_3dig", "name", "el3_nr_3dig", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_add_can", "name", "el3_op_add_can", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_add_cannot", "name", "el3_op_add_cannot", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_sub_can", "name", "el3_op_sub_can", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_sub_cannot", "name", "el3_op_sub_cannot", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_mul_can", "name", "el3_op_mul_can", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_mul_cannot", "name", "el3_op_mul_cannot", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_div_can", "name", "el3_op_div_can", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_op_div_cannot", "name", "el3_op_div_cannot", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_wp_add_can", "name", "el3_wp_add_can", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_wp_add_cannot", "name", "el3_wp_add_cannot", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_wp_sub_can", "name", "el3_wp_sub_can", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el3_wp_sub_cannot", "name", "el3_wp_sub_cannot", "value", "", 1, "form-control", "camp3"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_total_tested", "name", "el4_total_tested", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_rd_beg", "name", "el4_rd_beg", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_rd_letter", "name", "el4_rd_letter", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_rd_word", "name", "el4_rd_word", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_rd_para", "name", "el4_rd_para", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_rd_story", "name", "el4_rd_story", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_nr_beg", "name", "el4_nr_beg", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_nr_1dig", "name", "el4_nr_1dig", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_nr_2dig", "name", "el4_nr_2dig", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_nr_3dig", "name", "el4_nr_3dig", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_add_can", "name", "el4_op_add_can", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_add_cannot", "name", "el4_op_add_cannot", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_sub_can", "name", "el4_op_sub_can", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_sub_cannot", "name", "el4_op_sub_cannot", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_mul_can", "name", "el4_op_mul_can", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_mul_cannot", "name", "el4_op_mul_cannot", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_div_can", "name", "el4_op_div_can", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_op_div_cannot", "name", "el4_op_div_cannot", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_wp_add_can", "name", "el4_wp_add_can", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_wp_add_cannot", "name", "el4_wp_add_cannot", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_wp_sub_can", "name", "el4_wp_sub_can", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "el4_wp_sub_cannot", "name", "el4_wp_sub_cannot", "value", "", 1, "form-control", "camp4"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_total_tested", "name", "con_total_tested", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_rd_beg", "name", "con_rd_beg", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_rd_letter", "name", "con_rd_letter", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_rd_word", "name", "con_rd_word", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_rd_para", "name", "con_rd_para", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_rd_story", "name", "con_rd_story", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_nr_beg", "name", "con_nr_beg", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_nr_1dig", "name", "con_nr_1dig", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_nr_2dig", "name", "con_nr_2dig", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_nr_3dig", "name", "con_nr_3dig", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_add_can", "name", "con_op_add_can", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_add_cannot", "name", "con_op_add_cannot", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_sub_can", "name", "con_op_sub_can", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_sub_cannot", "name", "con_op_sub_cannot", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_mul_can", "name", "con_op_mul_can", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_mul_cannot", "name", "con_op_mul_cannot", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_div_can", "name", "con_op_div_can", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_op_div_cannot", "name", "con_op_div_cannot", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_wp_add_can", "name", "con_wp_add_can", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_wp_add_cannot", "name", "con_wp_add_cannot", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_wp_sub_can", "name", "con_wp_sub_can", "value", "", 1, "form-control", "con"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "con_wp_sub_cannot", "name", "con_wp_sub_cannot", "value", "", 1, "form-control", "con"], ["id", "table_6", 1, "table", "table-bordered"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_total_tested", "name", "s12_bl_total_tested", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_total_tested_covered2017", "name", "s12_total_tested_covered2017", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_total_tested_male", "name", "s12_total_tested_male", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_total_tested_female", "name", "s12_total_tested_female", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_rd_beg", "name", "s12_bl_rd_beg", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_rd_letter", "name", "s12_bl_rd_letter", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_rd_word", "name", "s12_bl_rd_word", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_rd_para", "name", "s12_bl_rd_para", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_rd_story", "name", "s12_bl_rd_story", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_nr_beg", "name", "s12_bl_nr_beg", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_nr_1dig", "name", "s12_bl_nr_1dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_nr_2dig", "name", "s12_bl_nr_2dig", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_op_add_can", "name", "s12_bl_op_add_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_op_add_cannot", "name", "s12_bl_op_add_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_op_sub_can", "name", "s12_bl_op_sub_can", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_bl_op_sub_cannot", "name", "s12_bl_op_sub_cannot", "value", "", 1, "form-control", "camp1"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_total_tested", "name", "s12_el_total_tested", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_total_tested_covered2022_el", "name", "s12_total_tested_covered2022_el", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_total_tested_male_el", "name", "s12_total_tested_male_el", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_total_tested_female_el", "name", "s12_total_tested_female_el", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_rd_beg", "name", "s12_el_rd_beg", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_rd_letter", "name", "s12_el_rd_letter", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_rd_word", "name", "s12_el_rd_word", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_rd_para", "name", "s12_el_rd_para", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_rd_story", "name", "s12_el_rd_story", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_nr_beg", "name", "s12_el_nr_beg", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_nr_1dig", "name", "s12_el_nr_1dig", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_nr_2dig", "name", "s12_el_nr_2dig", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_op_add_can", "name", "s12_el_op_add_can", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_op_add_cannot", "name", "s12_el_op_add_cannot", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_op_sub_can", "name", "s12_el_op_sub_can", "value", "", 1, "form-control", "endline"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "s12_el_op_sub_cannot", "name", "s12_el_op_sub_cannot", "value", "", 1, "form-control", "endline"], ["id", "table_7", 1, "table", "table-bordered"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp1_Govt", "name", "Camp1_Govt", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp1_SRGs", "name", "Camp1_SRGs", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp1_BCs", "name", "Camp1_BCs", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp1_MME", "name", "Camp1_MME", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp1_Community", "name", "Camp1_Community", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp1_Others", "name", "Camp1_Others", "value", "", 1, "form-control", "camp1", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp2_Govt", "name", "Camp2_Govt", "value", "", 1, "form-control", "camp2", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp2_SRGs", "name", "Camp2_SRGs", "value", "", 1, "form-control", "camp2", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp2_BCs", "name", "Camp2_BCs", "value", "", 1, "form-control", "camp2", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp2_MME", "name", "Camp2_MME", "value", "", 1, "form-control", "camp2", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp2_Community", "name", "Camp2_Community", "value", "", 1, "form-control", "camp2", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp2_Others", "name", "Camp2_Others", "value", "", 1, "form-control", "camp2", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp3_Govt", "name", "Camp3_Govt", "value", "", 1, "form-control", "camp3", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp3_SRGs", "name", "Camp3_SRGs", "value", "", 1, "form-control", "camp3", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp3_BCs", "name", "Camp3_BCs", "value", "", 1, "form-control", "camp3", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp3_MME", "name", "Camp3_MME", "value", "", 1, "form-control", "camp3", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp3_Community", "name", "Camp3_Community", "value", "", 1, "form-control", "camp3", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp3_Others", "name", "Camp3_Others", "value", "", 1, "form-control", "camp3", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp4_Govt", "name", "Camp4_Govt", "value", "", 1, "form-control", "camp4", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp4_SRGs", "name", "Camp4_SRGs", "value", "", 1, "form-control", "camp4", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp4_BCs", "name", "Camp4_BCs", "value", "", 1, "form-control", "camp4", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp4_MME", "name", "Camp4_MME", "value", "", 1, "form-control", "camp4", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp4_Community", "name", "Camp4_Community", "value", "", 1, "form-control", "camp4", 3, "keydown"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "data-rule-range", "0,500", "type", "Text", "id", "Camp4_Others", "name", "Camp4_Others", "value", "", 1, "form-control", "camp4", 3, "keydown"], [1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], ["href", "#"], ["href", "/tracking", 1, "dropdown-item", "notify-item", "cursor-pointer"], [1, "fe-line-chart"]], template: function SummarySheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModel", function SummarySheetComponent_Template_ul_ngModel_6_listener() { return ctx.username; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SummarySheetComponent_a_14_Template, 4, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummarySheetComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "TABLE 1: BASIC CAMP INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Unit Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "PUK0250004-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Camp Phase number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Four");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Five");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Six");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Type of camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Regular-3camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Regular-4Camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "FollowUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Camp Run in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "School Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "GPS Aashanpul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Village Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "AASANPUL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Total number of common children ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " (Children assessed at baseline and all endlines)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Total children targeted before endline 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Dise Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "5050314502");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_116_listener($event) { return ctx.check_target_male($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_120_listener($event) { return ctx.check_target_female($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Class 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_124_listener($event) { return ctx.check_Class3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Class 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_128_listener($event) { return ctx.check_Class4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Class 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_132_listener($event) { return ctx.check_Class5($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Class X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "select", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "NA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "th", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Class Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "NA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Camp No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "No. Of Teaching Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Brg Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "No. of teachers in school");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_208_listener($event) { return ctx.check_No_of_teacher($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Camp1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_216_listener($event) { return ctx.check_daya_camp1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "select", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Guddi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Other schools in the village/ community");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Govt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Pvt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Camp2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "select", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Guddi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Camp3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "select", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Guddi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_257_listener($event) { return ctx.check_govt_school($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_259_listener($event) { return ctx.check_pvt_school($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_261_listener($event) { return ctx.check_other_school($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Camp 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "select", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Guddi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "table", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "TABLE 2: ATTENDANCE & COMMUNITY VISIT INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Range (in %)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "No. of children present");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Camp 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Camp 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Camp 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Camp 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Consolidated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "0% - 20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "21% - 50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](319, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "51% - 70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "71% - 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "input", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](352, "input", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](356, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](358, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](360, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "table", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "CommunityVisit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "Camp1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Camp2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, "Camp3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "Camp4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Consolidated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "No.of children whose houses were visited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](380, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](384, "input", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](386, "input", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](388, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "table", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "TABLE 3: VOLUNTEER/TEACHER INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Volunteer/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, " Teacher number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](402, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, " 1-Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](404, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, " 2-Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "Highest Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](409, " 1-Not 10th pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](410, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, " 2-10th pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, " 3-12th pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, " 4-Graduate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](416, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, " 5-Post graduate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "Camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](427, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, " 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](431, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, " 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, " 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "V/T 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "select", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "select", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](464, "input", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](466, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](468, "input", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](470, "input", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](474, "V/T 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "select", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "select", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](486, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](498, "input", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](500, "input", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](502, "input", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](504, "input", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, "V/T 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "select", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](516, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "select", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](528, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](532, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](534, "input", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](536, "input", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](538, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "V/T 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](544, "select", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](550, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "select", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](556, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](558, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](560, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](562, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](564, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](566, "input", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](568, "input", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](570, "input", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](572, "input", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](576, "V/T 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "select", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](580, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](582, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](584, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "select", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](588, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](590, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](592, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](594, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](596, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](598, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](600, "input", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](602, "input", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](604, "input", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](606, "input", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](609, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](610, "V/T 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](612, "select", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](614, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](615, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "select", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](622, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](623, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](628, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](630, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](631, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](632, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](633, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](634, "input", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](635, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](636, "input", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](637, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](638, "input", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](639, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](640, "input", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](641, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](642, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](643, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](644, "V/T 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](645, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](646, "select", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](647, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](648, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](649, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](650, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](651, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](652, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](653, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](654, "select", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](655, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](656, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](657, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](658, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](659, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](662, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](663, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](664, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](665, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](666, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](667, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](668, "input", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](669, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](670, "input", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](671, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](672, "input", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](674, "input", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](675, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](677, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](678, "V/T 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](679, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](680, "select", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](681, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](682, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](683, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](684, "Volunteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](685, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](686, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](687, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](688, "select", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](689, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](690, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](691, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](692, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](693, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](694, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](695, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](696, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](697, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](698, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](699, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](700, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](701, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](702, "input", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](704, "input", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](706, "input", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](707, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](708, "input", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](709, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "table", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](711, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](712, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](713, "th", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](714, "TABLE 4: BASELINE ASSESSMENT (To be filled from \"UNIVERSAL CHILD LIST\")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](715, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](716, "th", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](717, "Report Section1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](718, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](719, "Enrolled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](720, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](721, "Tested");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](722, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](723, "Trageted Last Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](724, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](725, "Targeted in this year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](726, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](727, "Targeted in this year + last Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](728, "th", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](729, "Reading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](730, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](731, "Number Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](732, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](733, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](734, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](735, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](736, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](737, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](738, "Letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](739, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](740, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](741, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](742, "Para");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](743, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](744, "Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](745, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](746, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](747, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](748, "0-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](749, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](750, "10-99");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](751, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](752, "100-999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](753, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](754, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](755, "Std. 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](756, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](757, "input", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](758, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](759, "input", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](761, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](763, "input", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](764, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](765, "input", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](766, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](767, "input", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](768, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](769, "input", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](770, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](771, "input", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](772, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](773, "input", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](774, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](775, "input", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](776, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](777, "input", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](778, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](779, "input", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](780, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](781, "input", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](782, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](783, "input", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](784, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](785, "Update from Std 3 Universal Child List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](786, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](787, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](788, "Std. 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](789, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](790, "input", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](791, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](792, "input", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](793, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](794, "input", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](795, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](796, "input", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](797, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](798, "input", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](799, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](800, "input", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](801, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](802, "input", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](803, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](804, "input", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](806, "input", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](807, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](808, "input", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](809, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](810, "input", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](811, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](812, "input", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](814, "input", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](815, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](816, "input", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](817, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](818, "Update from Std 4 Universal Child List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](819, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](820, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](821, "Std. 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](823, "input", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](824, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](825, "input", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](826, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](827, "input", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](828, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](829, "input", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](831, "input", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](832, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](833, "input", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](834, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](835, "input", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](836, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](837, "input", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](838, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](839, "input", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](840, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](841, "input", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](842, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](843, "input", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](844, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](845, "input", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](846, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](847, "input", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](848, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](849, "input", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](850, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](851, "Update from Std 5 Universal Child List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](852, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](853, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](854, "First baseline Before Endline 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](855, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](856, "input", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](857, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](858, "input", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](859, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](860, "input", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](861, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](862, "input", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](863, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](864, "input", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](865, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](866, "input", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](867, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](868, "input", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](869, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](870, "input", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](871, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](872, "input", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](874, "input", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](875, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](876, "input", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](877, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](878, "input", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](879, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](880, "input", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](881, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](882, "input", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](883, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](884, "Add data for all the classes in this box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](885, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](886, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](887, "Additional children after Endline 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](888, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](889, "input", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](890, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](891, "input", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](892, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](893, "input", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](894, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](895, "input", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](896, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](897, "input", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](898, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](899, "input", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](900, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](901, "input", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](902, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](903, "input", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](904, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](905, "input", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](906, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](907, "input", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](908, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](909, "input", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](910, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](911, "input", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](912, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](913, "input", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](914, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](915, "input", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](916, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](917, "Update from UCL sheets of all classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](918, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](919, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](920, "CONSOLIDATED BASELINE*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](921, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](922, "input", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](923, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](924, "input", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](925, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](926, "input", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](927, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](928, "input", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](929, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](930, "input", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](931, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](932, "input", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](933, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](934, "input", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](935, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](936, "input", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](937, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](938, "input", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](939, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](940, "input", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](941, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](942, "input", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](943, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](944, "input", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](945, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](946, "input", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](947, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](948, "input", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](949, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](950, "Add the above two rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](951, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](952, "th", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](953, "*Consolidated baseline will only be calculated after 4 Camps are over in this Schlool/village.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](954, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](955, "table", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](956, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](957, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](958, "th", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](959, "TABLE 5: ENDLINE ASSESSMENT ( To be filled form \"LEARNING CAMP PROGRESS SHEETS\")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](960, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](961, "th", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](962, "Endline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](963, "th", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](964, "Total Tested (3+4+5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](965, "th", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](966, "Reading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](967, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](968, "Number Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](969, "th", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](970, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](971, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](972, "Word Problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](973, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](974, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](975, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](976, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](977, "Letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](978, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](979, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](980, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](981, "Para");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](982, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](983, "Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](984, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](985, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](986, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](987, "0-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](988, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](989, "10-99");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](990, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](991, "100-999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](992, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](993, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](994, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](995, "Sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](996, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](997, "Mul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](998, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](999, "Div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1000, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1001, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1002, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1003, "Sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1004, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1005, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1006, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1007, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1008, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1009, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1010, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1011, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1012, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1013, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1014, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1015, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1016, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1017, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1018, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1019, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1020, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1021, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1022, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1023, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1024, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1025, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1026, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1027, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1028, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1029, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1030, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1031, "Selected Children Baseline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1032, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1033, " (before endline 1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1034, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1035, "input", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1036, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1037, "input", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1038, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1039, "input", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1040, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1041, "input", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1042, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1043, "input", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1044, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1045, "input", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1046, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1047, "input", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1048, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1049, "input", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1050, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1051, "input", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1052, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1053, "input", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1054, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1055, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1056, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1057, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1058, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1059, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1060, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1061, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1062, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1063, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1064, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1065, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1066, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1067, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1068, "LC 1 Endline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1069, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1070, "input", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1071, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1072, "input", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1073, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1074, "input", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1075, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1076, "input", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1077, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1078, "input", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1079, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1080, "input", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1081, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1082, "input", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1083, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1084, "input", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1085, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1086, "input", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1087, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1088, "input", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1089, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1090, "input", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1091, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1092, "input", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1093, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1094, "input", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1095, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1096, "input", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1097, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1098, "input", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1099, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1100, "input", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1102, "input", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1104, "input", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1106, "input", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1108, "input", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1110, "input", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1112, "input", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1115, "LC 2 Endline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1117, "input", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1119, "input", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1121, "input", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1123, "input", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1125, "input", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1127, "input", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1129, "input", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1131, "input", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1133, "input", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1135, "input", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1137, "input", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1139, "input", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1141, "input", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1143, "input", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1145, "input", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1147, "input", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1149, "input", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1151, "input", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1153, "input", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1155, "input", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1157, "input", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1159, "input", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1162, "LC 3 Endline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1164, "input", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1166, "input", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1168, "input", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1170, "input", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1172, "input", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1174, "input", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1176, "input", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1178, "input", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1180, "input", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1182, "input", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1184, "input", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1186, "input", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1188, "input", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1190, "input", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1192, "input", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1194, "input", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1196, "input", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1198, "input", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1200, "input", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1202, "input", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1204, "input", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1206, "input", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1207, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1208, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1209, "LC 4 Endline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1211, "input", 339);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1213, "input", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1215, "input", 341);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1217, "input", 342);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1219, "input", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1221, "input", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1223, "input", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1225, "input", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1227, "input", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1229, "input", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1231, "input", 349);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1233, "input", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1235, "input", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1237, "input", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1239, "input", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1241, "input", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1243, "input", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1245, "input", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1247, "input", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1249, "input", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1251, "input", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1253, "input", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1254, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1255, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1256, "Consolidated Endline of selected children*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1258, "input", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1260, "input", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1262, "input", 363);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1264, "input", 364);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1266, "input", 365);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1268, "input", 366);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1270, "input", 367);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1272, "input", 368);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1274, "input", 369);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1276, "input", 370);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1278, "input", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1280, "input", 372);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1282, "input", 373);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1284, "input", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1286, "input", 375);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1288, "input", 376);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1290, "input", 377);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1292, "input", 378);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1294, "input", 379);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1296, "input", 380);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1298, "input", 381);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1300, "input", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1301, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1302, "th", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1303, "* The last endline of all selected children will be considered while calculating consolidated endline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1304, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1305, "table", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1306, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1307, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1308, "th", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1309, "TABLE 6: STD 1-2 INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1310, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1311, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1312, "Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1313, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1314, "Total Children");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1315, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1316, "Covered in 22/23");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1317, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1318, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1319, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1320, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1321, "th", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1322, "Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1323, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1324, "Number Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1325, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1326, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1327, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1328, "Sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1329, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1330, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1331, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1332, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1333, "Letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1334, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1335, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1336, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1337, "Para");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1338, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1339, "Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1340, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1341, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1342, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1343, "0-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1344, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1345, "10-99");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1346, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1347, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1348, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1349, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1350, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1351, "Can");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1352, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1353, "Cannot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1354, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1355, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1356, "BaseLine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1358, "input", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1360, "input", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1362, "input", 386);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1364, "input", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1366, "input", 388);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1368, "input", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1370, "input", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1372, "input", 391);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1374, "input", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1376, "input", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1378, "input", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1379, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1380, "input", 395);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1382, "input", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1384, "input", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1386, "input", 398);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1388, "input", 399);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1389, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1390, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1391, "EndLine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1393, "input", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1395, "input", 401);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1397, "input", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1399, "input", 403);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1401, "input", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1403, "input", 405);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1405, "input", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1407, "input", 407);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1409, "input", 408);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1411, "input", 409);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1413, "input", 410);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1415, "input", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1417, "input", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1419, "input", 413);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1421, "input", 414);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1423, "input", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1424, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1425, "table", 416);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1426, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1427, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1428, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1429, "TABLE 7: PEOPLE VISITING THE CAMPS (Only number of visits)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1430, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1431, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1432, "Camp number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1433, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1434, "State/Program head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1435, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1436, "Content SRGs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1437, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1438, "BCs/DRLs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1439, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1440, "MME Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1441, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1442, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1443, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1444, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1445, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1446, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1447, "Camp 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1449, "input", 417);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1449_listener($event) { return ctx.state_head_visit_camp1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1451, "input", 418);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1451_listener($event) { return ctx.srg_visit_camp1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1453, "input", 419);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1453_listener($event) { return ctx.bc_visit_camp1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1455, "input", 420);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1455_listener($event) { return ctx.mme_visit_camp1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1457, "input", 421);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1457_listener($event) { return ctx.community_visit_camp1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1459, "input", 422);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1459_listener($event) { return ctx.other_visit_camp1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1460, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1461, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1462, "Camp 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1463, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1464, "input", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1464_listener($event) { return ctx.state_head_visit_camp2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1466, "input", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1466_listener($event) { return ctx.srg_visit_camp2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1468, "input", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1468_listener($event) { return ctx.bc_visit_camp2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1470, "input", 426);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1470_listener($event) { return ctx.mme_visit_camp2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1472, "input", 427);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1472_listener($event) { return ctx.community_visit_camp2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1474, "input", 428);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1474_listener($event) { return ctx.other_visit_camp2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1475, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1476, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1477, "Camp 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1479, "input", 429);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1479_listener($event) { return ctx.state_head_visit_camp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1481, "input", 430);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1481_listener($event) { return ctx.srg_visit_camp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1483, "input", 431);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1483_listener($event) { return ctx.bc_visit_camp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1485, "input", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1485_listener($event) { return ctx.mme_visit_camp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1487, "input", 433);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1487_listener($event) { return ctx.community_visit_camp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1488, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1489, "input", 434);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1489_listener($event) { return ctx.other_visit_camp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1490, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1491, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1492, "Camp 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1494, "input", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1494_listener($event) { return ctx.state_head_visit_camp4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1496, "input", 436);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1496_listener($event) { return ctx.srg_visit_camp4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1498, "input", 437);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1498_listener($event) { return ctx.bc_visit_camp4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1500, "input", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1500_listener($event) { return ctx.mme_visit_camp4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1502, "input", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1502_listener($event) { return ctx.community_visit_camp4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1504, "input", 440);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SummarySheetComponent_Template_input_keydown_1504_listener($event) { return ctx.other_visit_camp4($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1505, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1506, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1507, "footer", 441);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1508, "div", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1509, "div", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1510, "div", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1511, " 2021 \u00A9 Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1512, "a", 445);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1513, "Pratham");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_tracker == 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);\r\n    padding: 0 10px 0 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    height: 70px;\r\n    z-index: 100;\r\n    padding-left: 30px !important;\r\n    border-bottom: 3px solid #FFC000;\r\n    }\r\n\r\n    .footer_link[_ngcontent-%COMP%] {\r\n    color: #FFC000;\r\n    }\r\n\r\n    .wrimagecard[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        margin-bottom: 1.5rem;\r\n        text-align: left;\r\n        position: relative;\r\n        background: #fff;\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        transition: all 0.3s ease;\r\n    }\r\n\r\n    .wrimagecard[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-size: 70px;\r\n    }\r\n\r\n    .wrimagecard-topimage_header[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    text-align: center;\r\n    background-color:rgba(250, 188, 9, 0.1);\r\n    color:#fabc09;\r\n    }\r\n\r\n    a.wrimagecard[_ngcontent-%COMP%]:hover, .wrimagecard-topimage[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);\r\n    }\r\n\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n\r\n    .wrimagecard-topimage_title[_ngcontent-%COMP%] {\r\n        padding: 20px 24px;\r\n        height: 80px;\r\n        padding-bottom: 0.75rem;\r\n        position: relative;\r\n    }\r\n\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        border-bottom: none;\r\n        text-decoration: none;\r\n        color: #525c65;\r\n        transition: color 0.3s ease;\r\n    }\r\n\r\n    .tablecard[_ngcontent-%COMP%]{\r\n        background: rgba(250, 188, 9, 0.1);\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        margin-bottom: 50px;\r\n\r\n    }\r\n\r\n    .content-page[_ngcontent-%COMP%]{\r\n  margin-left: 0px !important;\r\n}\r\n\r\n    .footer[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n    right: 0 !important;\r\n    left: 0px !important;\r\n}\r\n\r\n    .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: #98a6ad;\r\n    background-color: #323a46;\r\n    border-color: #424c5c;\r\n}\r\n\r\n    .cursor-pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n    .form-control[_ngcontent-%COMP%]:focus {\r\n    border-color: #09b0da;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(19, 129, 231, 0.6);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnktc2hlZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFFdEIsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEM7O0lBRUE7SUFDQSxjQUFjO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtEQUFrRDtRQUNsRCxrQkFBa0I7UUFDbEIseUJBQXlCO0lBQzdCOztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBQ0E7SUFDQSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2I7O0lBQ0E7UUFDSSw4Q0FBOEM7SUFDbEQ7O0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7SUFDbEI7O0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7O0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCwyQkFBMkI7SUFDL0I7O0lBQ0E7UUFDSSxrQ0FBa0M7UUFDbEMsa0RBQWtEO1FBQ2xELGtCQUFrQjtRQUNsQixtQkFBbUI7O0lBRXZCOztJQUdKO0VBQ0UsMkJBQTJCO0FBQzdCOztJQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0lBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7SUFFQTtFQUNFLGVBQWU7QUFDakI7O0lBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUZBQWlGO0FBQ3JGIiwiZmlsZSI6InN1bW1hcnktc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY3VzdG9tIHtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzM4NDE0YTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2JhKDE1NCwxNjEsMTcxLC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMzVweCAwIHJnYmEoMTU0LDE2MSwxNzEsLjE1KTtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRkZDMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXJfbGluayB7XHJcbiAgICBjb2xvcjogI0ZGQzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAud3JpbWFnZWNhcmR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAxMnB4IDE1cHggMjBweCAwcHggcmdiYSg0Niw2MSw3MywwLjE1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZCAuZmF7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZC10b3BpbWFnZV9oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1MCwgMTg4LCA5LCAwLjEpO1xyXG4gICAgY29sb3I6I2ZhYmMwOTtcclxuICAgIH1cclxuICAgIGEud3JpbWFnZWNhcmQ6aG92ZXIsIC53cmltYWdlY2FyZC10b3BpbWFnZTpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggMHB4IHJnYmEoNDYsNjEsNzMsMC4yKTtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZC10b3BpbWFnZSBhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQtdG9waW1hZ2VfdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLndyaW1hZ2VjYXJkLXRvcGltYWdlIGEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjNTI1YzY1O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICAgIC50YWJsZWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDE4OCwgOSwgMC4xKTtcclxuICAgICAgICBib3gtc2hhZG93OiAxMnB4IDE1cHggMjBweCAwcHggcmdiYSg0Niw2MSw3MywwLjE1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuLmNvbnRlbnQtcGFnZXtcclxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZSAudGhlYWQtZGFyayB0aCB7XHJcbiAgICBjb2xvcjogIzk4YTZhZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjNhNDY7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MjRjNWM7XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzA5YjBkYTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDE5LCAxMjksIDIzMSwgMC42KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZoVi":
/*!**************************************************************!*\
  !*** ./src/app/custom-text-box/custom-text-box.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomTextBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTextBoxComponent", function() { return CustomTextBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _TooltipDirective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TooltipDirective */ "uTPM");




function CustomTextBoxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CustomTextBoxComponent_div_0_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.checkMinMax($event, ctx_r6.elementData); })("keypress", function CustomTextBoxComponent_div_0_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.isNumberKey($event, ctx_r8.elementData.input_type, ctx_r8.elementData.regex); })("input", function CustomTextBoxComponent_div_0_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.textInput($event, ctx_r9.elementData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.elementData.elementTooltip["en"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.elementData.elementLabel[ctx_r0.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.elementData.element_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx_r0.elementData.textLength)("max", ctx_r0.elementData.max_val)("min", ctx_r0.elementData.min_val)("required", ctx_r0.elementData.is_required);
} }
function CustomTextBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomTextBoxComponent_div_1_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onTextBoxInputData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.elementData.elementTooltip["en"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.elementData.elementLabel[ctx_r1.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r1.elementData.element_id);
} }
function CustomTextBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomTextBoxComponent_div_2_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onTextBoxInputData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r2.elementData.elementTooltip["en"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.elementData.elementLabel[ctx_r2.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r2.elementData.element_id);
} }
function CustomTextBoxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r3.elementData.element_id);
} }
function CustomTextBoxComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.elementData.elementTooltip["en"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.elementData.elementLabel[ctx_r4.lang]);
} }
function CustomTextBoxComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function CustomTextBoxComponent_div_5_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.isNumberKey($event, ctx_r14.elementData.input_type, ctx_r14.elementData.regex); })("change", function CustomTextBoxComponent_div_5_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onTextBoxInputData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r5.elementData.elementTooltip["en"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.elementData.elementLabel[ctx_r5.lang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.elementData.element_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r5.elementData.element_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx_r5.elementData.textLength)("required", true);
} }
class CustomTextBoxComponent {
    constructor() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.tippyProps = {
            arrow: true,
            placement: 'top',
            theme: 'translucent'
        };
    }
    ngOnInit() {
        this.lang = localStorage.getItem('lang');
        console.log(this.lang);
        setTimeout(() => {
            $('.flatpickr-input').flatpickr({
                altInput: true,
                allowInput: true,
                altFormat: 'd-m-Y',
                dateFormat: "d-m-Y",
            });
            $('.flatpickr-input').mask("99-99-9999");
            // $('.flatpickr-input').change(function() {
            //   if ($(this).val().substring(0, 2) > 12 || $(this).val().substring(0, 2) == "00") {
            //     console.log("Wrong month format");
            //     return false;
            //   }
            //   if ($(this).val().substring(3, 5) > 31 || $(this).val().substring(0, 2) == "00") {
            //     console.log("Wrong date format");
            //     return false;
            //   }
            // });
            $('.flatpickr-input-range').flatpickr({
                altInput: true,
                mode: "range",
                altFormat: 'd-m-Y',
                dateFormat: "d-m-Y",
            });
            // $('[data-toggle="input-mask"]').each(function(a, e) {
            //   var t = $(e).data("maskFormat"),
            //       n = $(e).data("reverse");
            //   null != n ? $(e).mask(t, {
            //       reverse: n
            //   }) : $(e).mask(t)
            // })
        }, 1000);
        //https://codepen.io/weiyuan-lane/pen/NWPBLBG
    }
    onTextBoxInputData(event) {
        this.elementData.element_value = event.target.value;
        this.action.emit(this.elementData);
    }
    isNumberKey(evt, input_type, regex) {
        this.removeErrorHighlight();
        var regexValidate = new RegExp(regex);
        if (input_type == 'number') {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
        else {
            return true;
        }
    }
    checkMinMax(evt, element) {
        if ((element.input_type == 'number')) {
            let el_val = $('#' + element.element_id).val();
            console.log(el_val);
            // if (((element.min_val!='') && (el_val<element.min_val))|| ((element.max_val!='') &&(el_val>element.max_val)) ){
            //   $('#'+element.element_id).removeClass('form-control-focus').addClass('highlight')
            //   this.errorToastr(element.elementLabel['en']+" is between "+ element.min_val+" to"+element.max_val);
            //     setTimeout(() => {
            //       $('.highlight').addClass('form-control-focus').removeClass('highlight')
            //     }, 2000);
            // }
            if ((element.textLength != '') && (el_val.length > element.textLength)) {
                $('#' + element.element_id).removeClass('form-control-focus').addClass('highlight');
                this.errorToastr(element.elementLabel['en'] + " is max " + element.textLength + " digit");
            }
        }
    }
    textInput(evt, element) {
        if ((element.input_type == 'number')) {
            let el_val = $('#' + element.element_id).val();
            console.log(el_val);
            // if((element.textLength!='') && (el_val.length() > element.textLength)){
            //   $('#'+element.element_id).removeClass('form-control-focus').addClass('highlight')
            //   this.errorToastr(element.elementLabel['en']+" is max "+element.textLength+" digit");
            // }
            // if ( ((element.max_val!='') &&(el_val>element.max_val)) ){
            //   $('#'+element.element_id).removeClass('form-control-focus').addClass('highlight')
            //   this.errorToastr(element.elementLabel['en']+" is max "+element.max_val);
            //     setTimeout(() => {
            //       $('.highlight').addClass('form-control-focus').removeClass('highlight')
            //     }, 2000);
            // }
        }
        //console.log(element);
        if (element.operation == 'sum') {
            let dependant = element.operator;
            if (dependant != undefined) {
                let otherTotal = 0;
                let dependentID = dependant.split(',');
                dependentID.forEach(ele => {
                    let value = $('#' + ele).val();
                    if (value != '' && !isNaN(value)) {
                        otherTotal += parseInt(value);
                    }
                });
                $('#' + element.operator_result).val(otherTotal);
            }
        }
        //console.log(element);
        if (element.dependant == 'less than equal' || element.dependant == 'less' || element.dependant == 'equal') {
            let dependant = element.dependent_operator;
            //console.log(dependant);
            let total = $('#' + element.dependent_result).val();
            if (dependant != undefined) {
                let otherTotal = 0;
                let dependentID = dependant.split(',');
                dependentID.forEach(ele => {
                    let value = $('#' + ele).val();
                    if (value != '' && !isNaN(value)) {
                        otherTotal += parseInt(value);
                    }
                });
                console.log(dependentID, otherTotal);
                if (otherTotal > total) {
                    console.log(otherTotal);
                    let currentVal = $(evt.target).val();
                    currentVal = currentVal / 10;
                    $(evt.target).val(~~currentVal);
                    $('#' + element.element_id).removeClass('form-control-focus').addClass('highlight');
                    setTimeout(() => {
                        $('.highlight').addClass('form-control-focus').removeClass('highlight');
                    }, 1000);
                }
            }
        }
        //this.removeErrorHighlight()
    }
    errorHighlight(id) {
        console.log(id);
        $('#' + id).removeClass('form-control-focus').addClass('highlight');
    }
    removeErrorHighlight() {
        $('.highlight').addClass('form-control-focus').removeClass('highlight');
    }
    errorToastr(txt = "Oh Snap !!!", heading = "Error", bgColor = "blue", txtColor = "#eee", textAlignment = "right", pos = "top-right", icon = "error") {
        $.toast({
            heading: "<strong>" + heading + "</strong>",
            text: txt,
            showHideTransition: 'slide',
            bgColor: '#bf441d',
            textColor: '#eee',
            allowToastClose: false,
            hideAfter: 5000,
            stack: 5,
            textAlign: 'left',
            position: 'top-right',
            icon: 'error',
            loaderBg: '#fff'
        });
    }
}
CustomTextBoxComponent.ɵfac = function CustomTextBoxComponent_Factory(t) { return new (t || CustomTextBoxComponent)(); };
CustomTextBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTextBoxComponent, selectors: [["app-custom-text-box"]], inputs: { elementData: "elementData" }, outputs: { action: "action" }, decls: 6, vars: 6, consts: [["class", "form-group mb-3", 4, "ngIf"], ["class", "form-group mb-1", 4, "ngIf"], [1, "form-group", "mb-3"], ["for", "simpleinput", "tabindex", "-1", "appTooltip", "", 1, "text-break", 3, "title"], ["type", "text", 1, "form-control", 3, "id", "keyup", "keypress", "input"], ["type", "text", "placeholder", "DD-MM-YYYY", "data-toggle", "input-mask", "data-mask-format", "00-00-0000", 1, "form-control", "flatpickr-input", 3, "id", "change"], ["type", "text", "placeholder", "DD-MM-YYYY", "data-toggle", "input-mask", "data-mask-format", "00-00-0000", 1, "form-control", "flatpickr-input-range", 3, "id", "change"], ["type", "hidden", 1, "form-control", 3, "id"], [1, "form-group", "mb-1"], ["type", "text", "disabled", "", 1, "form-control", 3, "value", "id", "keypress", "change"]], template: function CustomTextBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomTextBoxComponent_div_0_Template, 4, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTextBoxComponent_div_1_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomTextBoxComponent_div_2_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomTextBoxComponent_div_3_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomTextBoxComponent_div_4_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomTextBoxComponent_div_5_Template, 4, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elementData.element_type == "ElementText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elementData.element_type == "ElementDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elementData.element_type == "ElementDateRange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elementData.element_type == "ElementHidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elementData.element_type == "ElementLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elementData.element_type == "ElementTextValue");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _TooltipDirective__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], styles: ["input[type=\"text\"][_ngcontent-%COMP%]:disabled{background-color:#eae9f5;}\r\n.highlight[_ngcontent-%COMP%]{\r\n  border-color: red !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px red !important;\r\n}\r\n.highlight[_ngcontent-%COMP%]:focus{\r\n  border-color: red !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px red !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS10ZXh0LWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7QUFDWjs7NENBRTRDO0FBRTVDLDRCQUE0Qix3QkFBd0IsQ0FBQztBQUVyRDtFQUNFLDRCQUE0QjtFQUU1QixvRUFBb0U7QUFDdEU7QUFFQTtFQUNFLDRCQUE0QjtFQUU1QixvRUFBb0U7QUFDdEUiLCJmaWxlIjoiY3VzdG9tLXRleHQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVGhlbWVzICovXHJcbi8qIEBpbXBvcnQgJ3RpcHB5LmpzL3RoZW1lcy9saWdodC1ib3JkZXIuY3NzJztcclxuQGltcG9ydCAndGlwcHkuanMvdGhlbWVzL2xpZ2h0LmNzcyc7XHJcbkBpbXBvcnQgJ3RpcHB5LmpzL3RoZW1lcy90cmFuc2x1Y2VudC5jc3MnOyAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZWFlOWY1O31cclxuXHJcbi5oaWdobGlnaHR7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJlZCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0OmZvY3Vze1xyXG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZWQgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZWQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "bX9t":
/*!************************************************!*\
  !*** ./src/app/unitlist/unitlist.component.ts ***!
  \************************************************/
/*! exports provided: UnitlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitlistComponent", function() { return UnitlistComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function UnitlistComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 54);
} }
function UnitlistComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 55);
} }
function UnitlistComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Data Entry Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UnitlistComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UnitlistComponent_div_24_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onClickShowProgram(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Change Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Program_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", Program_r7.program_icon, " font-22 avatar-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](Program_r7.program);
} }
function UnitlistComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UnitlistComponent_div_69_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const Program_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onClickSelectProgram(Program_r10.ProgramId, Program_r10.program, Program_r10.program_icon); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Program_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](Program_r10.program_icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](Program_r10.program);
} }
function UnitlistComponent_ng_container_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const act_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", act_r13.col_name, "");
} }
function UnitlistComponent_tr_96_td_13_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UnitlistComponent_tr_96_td_13_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const act1_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const el_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.onPageRedirect(el_r14, act1_r18.form_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act1_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", act1_r18.action_name, " ");
} }
function UnitlistComponent_tr_96_td_13_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UnitlistComponent_tr_96_td_13_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const act1_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const el_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onPageRedirect(el_r14, act1_r18.form_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act1_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", act1_r18.action_name, " ");
} }
function UnitlistComponent_tr_96_td_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UnitlistComponent_tr_96_td_13_div_1_button_1_Template, 3, 1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UnitlistComponent_tr_96_td_13_div_1_button_2_Template, 3, 1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act1_r18 = ctx.$implicit;
    const el_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", el_r14.submitted_form_ids.indexOf(act1_r18.form_id) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", el_r14.submitted_form_ids.indexOf(act1_r18.form_id) !== -1);
} }
function UnitlistComponent_tr_96_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UnitlistComponent_tr_96_td_13_div_1_Template, 3, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", act_r16.actions);
} }
function UnitlistComponent_tr_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, UnitlistComponent_tr_96_td_13_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](el_r14.PrathamDistrictName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](el_r14.PrathamBlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](el_r14.PrathamClusterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", el_r14.UnitId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", el_r14.UnitCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", el_r14.UnitName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", el_r14.action_key);
} }
class UnitlistComponent {
    constructor(spinner, _router, _service, route) {
        this.spinner = spinner;
        this._router = _router;
        this._service = _service;
        this.route = route;
        this.elements = [];
        this.ProgramData = [];
        this.Action_button = [];
        this.programName = '';
        this.program_id = 0;
        this.route.params.subscribe(event => {
            this.programId = event.program_id;
            this.project = localStorage.getItem('project');
        });
    }
    onPopState(event) {
        setTimeout(() => {
            let history = localStorage.getItem('history');
            console.log(history);
            if (history == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Logout',
                    text: 'Are you sure you want to logout?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Logout!',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.value) {
                        this.logout();
                    }
                    else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                    }
                });
            }
            this._router.navigate([`unitlist`]);
            localStorage.setItem('history', '');
        }, 50);
    }
    ngOnInit() {
        //this.getTable();
        /** spinner starts on init */
        this.spinner.show();
        this.getProgram();
        this.program_id = this.Program[0].ProgramId;
        this.username = localStorage.getItem("name");
        this.is_tracker = localStorage.getItem("is_tracker");
    }
    getProgram() {
        this.spinner.hide();
        this.Program = JSON.parse(localStorage.getItem("Program"));
        return this.Program;
    }
    btoaFunction(id) {
        return btoa(id);
    }
    getTable(BlockId, ProgramId, Action_button) {
        let tempthis = this;
        if (this.program_id == 108) {
            this.servername = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_gp + 'pre_primary_portal/schools';
        }
        else {
            if (this.project == 1)
                this.servername = 'https://pc.prathamapps.com/index.php/Data_entry_portal/units';
            else if (this.project == 2)
                this.servername = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servername_gp + 'pre_primary_portal/schools';
            //this.servername = 'https://testgp.prathamapps.com/3.0/index.php/pre_primary_portal/schools';
        }
        $.ajax({
            method: "POST",
            url: this.servername,
            type: "json",
            data: { "block_id": BlockId, "program_id": ProgramId }
        })
            .done(function (msg) {
            if (msg['status'] != 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
            }
            else {
                if (msg['units'] == '') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        icon: 'warning',
                        title: '',
                        text: 'No Units Available!'
                    });
                    //$('#id_unit_tabel').hide();
                }
                else {
                    $('#id_unit_tabel').show();
                    msg['units'].forEach(value => {
                        value['action_key'] = Action_button;
                        // value['submitted_form_ids'] = [1,2,4]
                    });
                    //msg['units']['action_key'] = Action_button;
                    console.log(msg['units']);
                    tempthis.elements = msg['units'];
                    setTimeout(() => {
                        $("#unit_list").DataTable({
                            destroy: true,
                            "scrollX": true,
                            autoWidth: true,
                            language: {
                                paginate: {
                                    previous: "<i class='mdi mdi-chevron-left'>",
                                    next: "<i class='mdi mdi-chevron-right'>"
                                }
                            },
                            drawCallback: function () {
                                $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                            }
                        });
                    }, 500);
                }
            }
        });
    }
    onClickSelectProgram(ProgramId, program, program_icon) {
        this.spinner.show();
        this.BlockId = JSON.parse(localStorage.getItem("BlockId"));
        let hasAction = true;
        this.programName = program;
        this.Program.forEach(val => {
            if (val.ProgramId == ProgramId) {
                if (val.action_key != null) {
                    val.action_key.forEach(v => {
                        this.Action_button.push(v);
                    });
                }
                else {
                    hasAction = false;
                }
            }
        });
        if (hasAction == true) {
            this.getTable(this.BlockId, ProgramId, this.Action_button);
            this.programId = ProgramId;
            this.ProgramData = [{ ProgramId: ProgramId, program: program, program_icon: program_icon }];
            localStorage.setItem('history', this.programId);
            $('#id_program_row').hide();
            //$('#id_unit_tabel').show();
            $('#id_program_selected').show();
            this.spinner.hide();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No Forms Ready For This Programme'
            });
        }
    }
    onClickShowProgram() {
        this.Action_button = [];
        //$('#remove_action').innerHTML = '';
        window.location.reload();
        $('#id_unit_tabel').hide();
        $('#id_program_row').show();
        $('#id_program_selected').hide();
        localStorage.setItem('history', '');
    }
    onPageRedirect(response, action) {
        let formData = {};
        formData['state_id'] = response.StateId;
        formData['state_name'] = response.StateName;
        formData['district_id'] = response.DistrictId;
        formData['district_name'] = response.PrathamDistrictName;
        formData['brg_id'] = response.BrgId;
        formData['teacher_name'] = response.BrgName;
        formData['unit_code'] = response.UnitCode;
        formData['unit_name'] = response.UnitName;
        formData['block_id'] = response.BlockId;
        formData['block_name'] = response.PrathamBlockName;
        formData['cluster_id'] = response.ClusterId;
        formData['cluster_name'] = response.PrathamClusterName;
        formData['program'] = response.Program;
        formData['program_id'] = response.ProgramId;
        formData['unit_id'] = response.UnitId;
        formData['village_id'] = response.VillageId;
        formData['village_name'] = response.VillageName;
        formData['dise_code'] = response.dise_code;
        this.passdata = action;
        //sessionStorage.setItem('form_data',JSON.stringify(formData))
        //localStorage.setItem('form_data',JSON.stringify(formData));
        let url = null;
        console.log(formData);
        url = this._router.createUrlTree([`data-entry/${response.ProgramId}/${this.passdata}`]);
        // if(this.passdata=='5'){
        //   url = this._router.createUrlTree([`attendance-data-entry/${response.ProgramId}/${this.passdata}`]);
        // }else{
        //   url = this._router.createUrlTree([`data-entry/${response.ProgramId}/${this.passdata}`]);
        // }
        localStorage.setItem(response.ProgramId + '/' + this.passdata, JSON.stringify(formData));
        window.open(url.toString(), '_blank');
        //this._router.navigateByUrl(url.toString(),  { state: formData });
    }
    logout() {
        this._service.logout();
        if (this.Program == 108) {
        }
        this._router.navigate([`login`]);
    }
}
UnitlistComponent.ɵfac = function UnitlistComponent_Factory(t) { return new (t || UnitlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
UnitlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UnitlistComponent, selectors: [["app-unitlist"]], hostBindings: function UnitlistComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("popstate", function UnitlistComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 104, vars: 10, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, "float-left"], ["href", "index-2.html", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54", 4, "ngIf"], ["src", "assets/images/image2.jpeg", "alt", "", "height", "54", 4, "ngIf"], [1, "list-unstyled", "topnav-menu", "float-right", "mb-0", 3, "ngModel"], [1, "dropdown", "notification-list"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "false", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "nav-user", "mr-0", "waves-effect", "waves-light", 2, "color", "#fabc09"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "fa-2x"], [1, "pro-user-name", "ml-1"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right", "profile-dropdown"], ["href", "/tracking", "class", "dropdown-item notify-item cursor-pointer", 4, "ngIf"], [1, "dropdown-item", "notify-item", "cursor-pointer", 3, "click"], [1, "fe-log-out"], [1, "content-page"], [1, "content"], [1, "container-fluid", "pt-3"], ["id", "id_program_selected", 1, "row", 2, "display", "none", 3, "ngModel"], ["class", "col-md-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-4", "d-none"], [1, "widget-rounded-circle", "card-box"], [1, "row"], [1, "col-4"], [1, "avatar-lg", "rounded-circle", 2, "background-color", "rgba(250, 188, 9, 0.1)"], [1, "fa", "fa-school", "font-22", "avatar-title", 2, "color", "#fabc09"], [1, "col-8"], [1, "text-right"], [1, "text-dark", "mt-1"], ["data-plugin", "counterup"], [1, "text-muted", "mb-1", "text-truncate"], [1, "fa", "fa-users", "font-22", "avatar-title", 2, "color", "#fabc09"], [1, "fa", "fa-chart-line", "font-22", "avatar-title", 2, "color", "#fabc09"], ["id", "id_program_row", 1, "row", 3, "ngModel"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "id_unit_tabel", 1, "row", 2, "display", "none"], [1, "card", "pb-3"], [1, "card-title", "mb-3"], ["id", "unit_list", 1, "table", "table-striped", "table-bordered", 2, "width", "100%"], [1, "thead-dark", 2, "width", "100%"], ["scope", "col", "rowspan", "2"], ["scope", "col", "rowspan", "1", "colspan", "3"], ["id", "check-row"], ["id", "remove_action", 4, "ngFor", "ngForOf"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], [1, "footer"], [1, "container-fluid"], [1, "col-md-6"], ["href", "#"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54"], ["src", "assets/images/image2.jpeg", "alt", "", "height", "54"], ["href", "/tracking", 1, "dropdown-item", "notify-item", "cursor-pointer"], [1, "fe-line-chart"], [1, "col-md-3", "col-sm-4"], [2, "color", "#fabc09"], ["href", "javascript:void(0)", 3, "click"], [1, "wrimagecard", "wrimagecard-topimage"], [1, "wrimagecard-topimage_header"], [1, "wrimagecard-topimage_title"], ["id", "remove_action"], ["rowspan", "1"], ["scope", "row"], ["type", "button", "class", "btn btn-outline-success btn-rounded waves-effect waves-light m-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-rounded waves-effect waves-light m-1", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", "btn-rounded", "waves-effect", "waves-light", "m-1", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", 1, "btn", "btn-success", "btn-rounded", "waves-effect", "waves-light", "m-1", 3, "click"]], template: function UnitlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, UnitlistComponent_img_5_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UnitlistComponent_img_6_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModel", function UnitlistComponent_Template_ul_ngModel_7_listener() { return ctx.username; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, UnitlistComponent_a_15_Template, 4, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UnitlistComponent_Template_a_click_16_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModel", function UnitlistComponent_Template_div_ngModel_23_listener() { return ctx.ProgramData; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, UnitlistComponent_div_24_Template, 14, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Total Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h4", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h4", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Data Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModel", function UnitlistComponent_Template_div_ngModel_64_listener() { return ctx.Program; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, UnitlistComponent_div_69_Template, 8, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h4", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Unit List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "thead", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "District Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Block Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Cluster Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Unit Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, UnitlistComponent_ng_container_94_Template, 3, 1, "ng-container", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tbody", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, UnitlistComponent_tr_96_Template, 14, 7, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "footer", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " 2022 \u00A9 Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Pratham");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.program_id != 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.program_id == 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.is_tracker == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ProgramData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Program);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project == 1 ? "Unit Code" : "DISE Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project == 1 ? "Unit Name" : "School/Unit/Anganwadi Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Action_button);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.elements);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);\r\n    padding: 0 10px 0 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    height: 70px;\r\n    z-index: 100;\r\n    padding-left: 30px !important;\r\n    border-bottom: 3px solid #FFC000;\r\n    }\r\n    .logo[_ngcontent-%COMP%]{\r\n        align-items: left;\r\n    }\r\n    .footer_link[_ngcontent-%COMP%] {\r\n    color: #FFC000;\r\n    }\r\n    .wrimagecard[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        margin-bottom: 1.5rem;\r\n        text-align: left;\r\n        position: relative;\r\n        background: #fff;\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        transition: all 0.3s ease;\r\n    }\r\n    .wrimagecard[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-size: 70px;\r\n    }\r\n    .wrimagecard-topimage_header[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    text-align: center;\r\n    background-color:rgba(250, 188, 9, 0.1);\r\n    color:#fabc09;\r\n    }\r\n    a.wrimagecard[_ngcontent-%COMP%]:hover, .wrimagecard-topimage[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);\r\n    }\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n    .wrimagecard-topimage_title[_ngcontent-%COMP%] {\r\n        padding: 20px 24px;\r\n        height: 80px;\r\n        padding-bottom: 0.75rem;\r\n        position: relative;\r\n    }\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        border-bottom: none;\r\n        text-decoration: none;\r\n        color: #525c65;\r\n        transition: color 0.3s ease;\r\n    }\r\n    .tablecard[_ngcontent-%COMP%]{\r\n        background: rgba(250, 188, 9, 0.1);\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        margin-bottom: 50px;\r\n\r\n    }\r\n    .content-page[_ngcontent-%COMP%]{\r\n  margin-left: 0px !important;\r\n}\r\n    .footer[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n    right: 0 !important;\r\n    left: 0px !important;\r\n}\r\n    .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: #98a6ad;\r\n    background-color: #323a46;\r\n    border-color: #424c5c;\r\n}\r\n    .cursor-pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n    #unit_list[_ngcontent-%COMP%] {\r\n    overflow-x: auto; \r\n    overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBRXRCLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtJQUNBLGNBQWM7SUFDZDtJQUVBO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrREFBa0Q7UUFDbEQsa0JBQWtCO1FBQ2xCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtJQUNBLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYjtJQUNBO1FBQ0ksOENBQThDO0lBQ2xEO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxrQ0FBa0M7UUFDbEMsa0RBQWtEO1FBQ2xELGtCQUFrQjtRQUNsQixtQkFBbUI7O0lBRXZCO0lBR0o7RUFDRSwyQkFBMkI7QUFDN0I7SUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCO0lBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtJQUVBO0VBQ0UsZUFBZTtBQUNqQjtJQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJ1bml0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jdXN0b20ge1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MTRhOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMzVweCAwIHJnYmEoMTU0LDE2MSwxNzEsLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxNTQsMTYxLDE3MSwuMTUpO1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNGRkMwMDA7XHJcbiAgICB9XHJcbiAgICAubG9nb3tcclxuICAgICAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIH1cclxuICAgIC5mb290ZXJfbGluayB7XHJcbiAgICBjb2xvcjogI0ZGQzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAud3JpbWFnZWNhcmR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAxMnB4IDE1cHggMjBweCAwcHggcmdiYSg0Niw2MSw3MywwLjE1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZCAuZmF7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZC10b3BpbWFnZV9oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1MCwgMTg4LCA5LCAwLjEpO1xyXG4gICAgY29sb3I6I2ZhYmMwOTtcclxuICAgIH1cclxuICAgIGEud3JpbWFnZWNhcmQ6aG92ZXIsIC53cmltYWdlY2FyZC10b3BpbWFnZTpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggMHB4IHJnYmEoNDYsNjEsNzMsMC4yKTtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZC10b3BpbWFnZSBhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQtdG9waW1hZ2VfdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLndyaW1hZ2VjYXJkLXRvcGltYWdlIGEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjNTI1YzY1O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICAgIC50YWJsZWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDE4OCwgOSwgMC4xKTtcclxuICAgICAgICBib3gtc2hhZG93OiAxMnB4IDE1cHggMjBweCAwcHggcmdiYSg0Niw2MSw3MywwLjE1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuLmNvbnRlbnQtcGFnZXtcclxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZSAudGhlYWQtZGFyayB0aCB7XHJcbiAgICBjb2xvcjogIzk4YTZhZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjNhNDY7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MjRjNWM7XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jdW5pdF9saXN0IHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87IFxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "c5y2":
/*!************************!*\
  !*** ./AP_ECE_GP.json ***!
  \************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"element_type\":\"page\",\"element_data\":{\"element_title\":\"\",\"element_subtitle\":\"\"},\"element_id\":1,\"childrens\":[{\"element_id\":0,\"element_type\":\"section\",\"element_size\":12,\"element_data\":{\"element_title\":\"IIMPACT \",\"element_subtitle\":\"\"},\"childrens\":[{\"element_id\":1,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"state_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"State\",\"hi\":\"State\",\"mr\":\"State\",\"gu\":\"State\",\"bn\":\"State\",\"as\":\"State\",\"or\":\"State\",\"te\":\"State\",\"kn\":\"State\",\"ta\":\"State\",\"ur\":\"State\",\"pa\":\"State\"},\"elementTooltip\":{\"en\":\"State\",\"hi\":\"State\",\"mr\":\"State\",\"gu\":\"State\",\"bn\":\"State\",\"as\":\"State\",\"or\":\"State\",\"te\":\"State\",\"kn\":\"State\",\"ta\":\"State\",\"ur\":\"State\",\"pa\":\"State\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":2,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"state\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"State\",\"hi\":\"State\",\"mr\":\"State\",\"gu\":\"State\",\"bn\":\"State\",\"as\":\"State\",\"or\":\"State\",\"te\":\"State\",\"kn\":\"State\",\"ta\":\"State\",\"ur\":\"State\",\"pa\":\"State\"},\"elementTooltip\":{\"en\":\"State\",\"hi\":\"State\",\"mr\":\"State\",\"gu\":\"State\",\"bn\":\"State\",\"as\":\"State\",\"or\":\"State\",\"te\":\"State\",\"kn\":\"State\",\"ta\":\"State\",\"ur\":\"State\",\"pa\":\"State\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":3,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"district_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"District\",\"hi\":\"District\",\"mr\":\"District\",\"gu\":\"District\",\"bn\":\"District\",\"as\":\"District\",\"or\":\"District\",\"te\":\"District\",\"kn\":\"District\",\"ta\":\"District\",\"ur\":\"District\",\"pa\":\"District\"},\"elementTooltip\":{\"en\":\"District\",\"hi\":\"District\",\"mr\":\"District\",\"gu\":\"District\",\"bn\":\"District\",\"as\":\"District\",\"or\":\"District\",\"te\":\"District\",\"kn\":\"District\",\"ta\":\"District\",\"ur\":\"District\",\"pa\":\"District\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":4,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"district\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"District\",\"hi\":\"District\",\"mr\":\"District\",\"gu\":\"District\",\"bn\":\"District\",\"as\":\"District\",\"or\":\"District\",\"te\":\"District\",\"kn\":\"District\",\"ta\":\"District\",\"ur\":\"District\",\"pa\":\"District\"},\"elementTooltip\":{\"en\":\"District\",\"hi\":\"District\",\"mr\":\"District\",\"gu\":\"District\",\"bn\":\"District\",\"as\":\"District\",\"or\":\"District\",\"te\":\"District\",\"kn\":\"District\",\"ta\":\"District\",\"ur\":\"District\",\"pa\":\"District\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":5,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"block_id\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Block\",\"hi\":\"Block\",\"mr\":\"Block\",\"gu\":\"Block\",\"bn\":\"Block\",\"as\":\"Block\",\"or\":\"Block\",\"te\":\"Block\",\"kn\":\"Block\",\"ta\":\"Block\",\"ur\":\"Block\",\"pa\":\"Block\"},\"elementTooltip\":{\"en\":\"Block\",\"hi\":\"Block\",\"mr\":\"Block\",\"gu\":\"Block\",\"bn\":\"Block\",\"as\":\"Block\",\"or\":\"Block\",\"te\":\"Block\",\"kn\":\"Block\",\"ta\":\"Block\",\"ur\":\"Block\",\"pa\":\"Block\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":6,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"block\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Block\",\"hi\":\"Block\",\"mr\":\"Block\",\"gu\":\"Block\",\"bn\":\"Block\",\"as\":\"Block\",\"or\":\"Block\",\"te\":\"Block\",\"kn\":\"Block\",\"ta\":\"Block\",\"ur\":\"Block\",\"pa\":\"Block\"},\"elementTooltip\":{\"en\":\"Block\",\"hi\":\"Block\",\"mr\":\"Block\",\"gu\":\"Block\",\"bn\":\"Block\",\"as\":\"Block\",\"or\":\"Block\",\"te\":\"Block\",\"kn\":\"Block\",\"ta\":\"Block\",\"ur\":\"Block\",\"pa\":\"Block\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":7,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"lc_code\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"LC Code\",\"hi\":\"LC Code\",\"mr\":\"LC Code\",\"gu\":\"LC Code\",\"bn\":\"LC Code\",\"as\":\"LC Code\",\"or\":\"LC Code\",\"te\":\"LC Code\",\"kn\":\"LC Code\",\"ta\":\"LC Code\",\"ur\":\"LC Code\",\"pa\":\"LC Code\"},\"elementTooltip\":{\"en\":\"LC Code\",\"hi\":\"LC Code\",\"mr\":\"LC Code\",\"gu\":\"LC Code\",\"bn\":\"LC Code\",\"as\":\"LC Code\",\"or\":\"LC Code\",\"te\":\"LC Code\",\"kn\":\"LC Code\",\"ta\":\"LC Code\",\"ur\":\"LC Code\",\"pa\":\"LC Code\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":8,\"element_type\":\"ElementHidden\",\"element_size\":4,\"database_param\":\"lc_name\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"LC Name\",\"hi\":\"LC Name\",\"mr\":\"LC Name\",\"gu\":\"LC Name\",\"bn\":\"LC Name\",\"as\":\"LC Name\",\"or\":\"LC Name\",\"te\":\"LC Name\",\"kn\":\"LC Name\",\"ta\":\"LC Name\",\"ur\":\"LC Name\",\"pa\":\"LC Name\"},\"elementTooltip\":{\"en\":\"LC Name\",\"hi\":\"LC Name\",\"mr\":\"LC Name\",\"gu\":\"LC Name\",\"bn\":\"LC Name\",\"as\":\"LC Name\",\"or\":\"LC Name\",\"te\":\"LC Name\",\"kn\":\"LC Name\",\"ta\":\"LC Name\",\"ur\":\"LC Name\",\"pa\":\"LC Name\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":9,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"child_profile_lbl\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Child Profile\",\"hi\":\"Child Profile\",\"mr\":\"Child Profile\",\"gu\":\"Child Profile\",\"bn\":\"Child Profile\",\"as\":\"Child Profile\",\"or\":\"Child Profile\",\"te\":\"Child Profile\",\"kn\":\"Child Profile\",\"ta\":\"Child Profile\",\"ur\":\"Child Profile\",\"pa\":\"Child Profile\"},\"elementTooltip\":{\"en\":\"Child Profile\",\"hi\":\"Child Profile\",\"mr\":\"Child Profile\",\"gu\":\"Child Profile\",\"bn\":\"Child Profile\",\"as\":\"Child Profile\",\"or\":\"Child Profile\",\"te\":\"Child Profile\",\"kn\":\"Child Profile\",\"ta\":\"Child Profile\",\"ur\":\"Child Profile\",\"pa\":\"Child Profile\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":10,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"supervisor_name\",\"is_required\":\"true\",\"is_editable\":\"false\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Supervisor Name\",\"hi\":\"Supervisor Name\",\"mr\":\"Supervisor Name\",\"gu\":\"Supervisor Name\",\"bn\":\"Supervisor Name\",\"as\":\"Supervisor Name\",\"or\":\"Supervisor Name\",\"te\":\"Supervisor Name\",\"kn\":\"Supervisor Name\",\"ta\":\"Supervisor Name\",\"ur\":\"Supervisor Name\",\"pa\":\"Supervisor Name\"},\"elementTooltip\":{\"en\":\"Supervisor Name\",\"hi\":\"Supervisor Name\",\"mr\":\"Supervisor Name\",\"gu\":\"Supervisor Name\",\"bn\":\"Supervisor Name\",\"as\":\"Supervisor Name\",\"or\":\"Supervisor Name\",\"te\":\"Supervisor Name\",\"kn\":\"Supervisor Name\",\"ta\":\"Supervisor Name\",\"ur\":\"Supervisor Name\",\"pa\":\"Supervisor Name\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":11,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"donor_name\",\"is_required\":\"true\",\"is_editable\":\"false\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Donor Name\",\"hi\":\"Donor Name\",\"mr\":\"Donor Name\",\"gu\":\"Donor Name\",\"bn\":\"Donor Name\",\"as\":\"Donor Name\",\"or\":\"Donor Name\",\"te\":\"Donor Name\",\"kn\":\"Donor Name\",\"ta\":\"Donor Name\",\"ur\":\"Donor Name\",\"pa\":\"Donor Name\"},\"elementTooltip\":{\"en\":\"Donor Name\",\"hi\":\"Donor Name\",\"mr\":\"Donor Name\",\"gu\":\"Donor Name\",\"bn\":\"Donor Name\",\"as\":\"Donor Name\",\"or\":\"Donor Name\",\"te\":\"Donor Name\",\"kn\":\"Donor Name\",\"ta\":\"Donor Name\",\"ur\":\"Donor Name\",\"pa\":\"Donor Name\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":12,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"teacher_code\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Teacher Code\",\"hi\":\"Teacher Code\",\"mr\":\"Teacher Code\",\"gu\":\"Teacher Code\",\"bn\":\"Teacher Code\",\"as\":\"Teacher Code\",\"or\":\"Teacher Code\",\"te\":\"Teacher Code\",\"kn\":\"Teacher Code\",\"ta\":\"Teacher Code\",\"ur\":\"Teacher Code\",\"pa\":\"Teacher Code\"},\"elementTooltip\":{\"en\":\"Teacher Code\",\"hi\":\"Teacher Code\",\"mr\":\"Teacher Code\",\"gu\":\"Teacher Code\",\"bn\":\"Teacher Code\",\"as\":\"Teacher Code\",\"or\":\"Teacher Code\",\"te\":\"Teacher Code\",\"kn\":\"Teacher Code\",\"ta\":\"Teacher Code\",\"ur\":\"Teacher Code\",\"pa\":\"Teacher Code\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":13,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"teacher_name\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Teacher Name\",\"hi\":\"Teacher Name\",\"mr\":\"Teacher Name\",\"gu\":\"Teacher Name\",\"bn\":\"Teacher Name\",\"as\":\"Teacher Name\",\"or\":\"Teacher Name\",\"te\":\"Teacher Name\",\"kn\":\"Teacher Name\",\"ta\":\"Teacher Name\",\"ur\":\"Teacher Name\",\"pa\":\"Teacher Name\"},\"elementTooltip\":{\"en\":\"Teacher Name\",\"hi\":\"Teacher Name\",\"mr\":\"Teacher Name\",\"gu\":\"Teacher Name\",\"bn\":\"Teacher Name\",\"as\":\"Teacher Name\",\"or\":\"Teacher Name\",\"te\":\"Teacher Name\",\"kn\":\"Teacher Name\",\"ta\":\"Teacher Name\",\"ur\":\"Teacher Name\",\"pa\":\"Teacher Name\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":14,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"pngo_name\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"PNGO Name\",\"hi\":\"PNGO Name\",\"mr\":\"PNGO Name\",\"gu\":\"PNGO Name\",\"bn\":\"PNGO Name\",\"as\":\"PNGO Name\",\"or\":\"PNGO Name\",\"te\":\"PNGO Name\",\"kn\":\"PNGO Name\",\"ta\":\"PNGO Name\",\"ur\":\"PNGO Name\",\"pa\":\"PNGO Name\"},\"elementTooltip\":{\"en\":\"PNGO Name\",\"hi\":\"PNGO Name\",\"mr\":\"PNGO Name\",\"gu\":\"PNGO Name\",\"bn\":\"PNGO Name\",\"as\":\"PNGO Name\",\"or\":\"PNGO Name\",\"te\":\"PNGO Name\",\"kn\":\"PNGO Name\",\"ta\":\"PNGO Name\",\"ur\":\"PNGO Name\",\"pa\":\"PNGO Name\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":15,\"element_type\":\"ElementHidden\",\"element_size\":2,\"database_param\":\"id\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"hidden\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"ID\",\"hi\":\"ID\",\"mr\":\"ID\",\"gu\":\"ID\",\"bn\":\"ID\",\"as\":\"ID\",\"or\":\"ID\",\"te\":\"ID\",\"kn\":\"ID\",\"ta\":\"ID\",\"ur\":\"ID\",\"pa\":\"ID\"},\"elementTooltip\":{\"en\":\"ID\",\"hi\":\"ID\",\"mr\":\"ID\",\"gu\":\"ID\",\"bn\":\"ID\",\"as\":\"ID\",\"or\":\"ID\",\"te\":\"ID\",\"kn\":\"ID\",\"ta\":\"ID\",\"ur\":\"ID\",\"pa\":\"ID\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":16,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"child_code\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Child Code\",\"hi\":\"Child Code\",\"mr\":\"Child Code\",\"gu\":\"Child Code\",\"bn\":\"Child Code\",\"as\":\"Child Code\",\"or\":\"Child Code\",\"te\":\"Child Code\",\"kn\":\"Child Code\",\"ta\":\"Child Code\",\"ur\":\"Child Code\",\"pa\":\"Child Code\"},\"elementTooltip\":{\"en\":\"Child Code\",\"hi\":\"Child Code\",\"mr\":\"Child Code\",\"gu\":\"Child Code\",\"bn\":\"Child Code\",\"as\":\"Child Code\",\"or\":\"Child Code\",\"te\":\"Child Code\",\"kn\":\"Child Code\",\"ta\":\"Child Code\",\"ur\":\"Child Code\",\"pa\":\"Child Code\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":17,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"child_name\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"text\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Child Name\",\"hi\":\"Child Name\",\"mr\":\"Child Name\",\"gu\":\"Child Name\",\"bn\":\"Child Name\",\"as\":\"Child Name\",\"or\":\"Child Name\",\"te\":\"Child Name\",\"kn\":\"Child Name\",\"ta\":\"Child Name\",\"ur\":\"Child Name\",\"pa\":\"Child Name\"},\"elementTooltip\":{\"en\":\"Child Name\",\"hi\":\"Child Name\",\"mr\":\"Child Name\",\"gu\":\"Child Name\",\"bn\":\"Child Name\",\"as\":\"Child Name\",\"or\":\"Child Name\",\"te\":\"Child Name\",\"kn\":\"Child Name\",\"ta\":\"Child Name\",\"ur\":\"Child Name\",\"pa\":\"Child Name\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":18,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"child_age\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":1,\"max_val\":12,\"elementLabel\":{\"en\":\"Age of the child as on April 2022\",\"hi\":\"Age of the child as on April 2022\",\"mr\":\"Age of the child as on April 2022\",\"gu\":\"Age of the child as on April 2022\",\"bn\":\"Age of the child as on April 2022\",\"as\":\"Age of the child as on April 2022\",\"or\":\"Age of the child as on April 2022\",\"te\":\"Age of the child as on April 2022\",\"kn\":\"Age of the child as on April 2022\",\"ta\":\"Age of the child as on April 2022\",\"ur\":\"Age of the child as on April 2022\",\"pa\":\"Age of the child as on April 2022\"},\"elementTooltip\":{\"en\":\"Age of the child as on April 2022\",\"hi\":\"Age of the child as on April 2022\",\"mr\":\"Age of the child as on April 2022\",\"gu\":\"Age of the child as on April 2022\",\"bn\":\"Age of the child as on April 2022\",\"as\":\"Age of the child as on April 2022\",\"or\":\"Age of the child as on April 2022\",\"te\":\"Age of the child as on April 2022\",\"kn\":\"Age of the child as on April 2022\",\"ta\":\"Age of the child as on April 2022\",\"ur\":\"Age of the child as on April 2022\",\"pa\":\"Age of the child as on April 2022\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":19,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"class_enroll_in_govt_school\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":1,\"max_val\":10,\"elementLabel\":{\"en\":\"Class Enrolled in Govt school\",\"hi\":\"Class Enrolled in Govt school\",\"mr\":\"Class Enrolled in Govt school\",\"gu\":\"Class Enrolled in Govt school\",\"bn\":\"Class Enrolled in Govt school\",\"as\":\"Class Enrolled in Govt school\",\"or\":\"Class Enrolled in Govt school\",\"te\":\"Class Enrolled in Govt school\",\"kn\":\"Class Enrolled in Govt school\",\"ta\":\"Class Enrolled in Govt school\",\"ur\":\"Class Enrolled in Govt school\",\"pa\":\"Class Enrolled in Govt school\"},\"elementTooltip\":{\"en\":\"Class Enrolled in Govt school\",\"hi\":\"Class Enrolled in Govt school\",\"mr\":\"Class Enrolled in Govt school\",\"gu\":\"Class Enrolled in Govt school\",\"bn\":\"Class Enrolled in Govt school\",\"as\":\"Class Enrolled in Govt school\",\"or\":\"Class Enrolled in Govt school\",\"te\":\"Class Enrolled in Govt school\",\"kn\":\"Class Enrolled in Govt school\",\"ta\":\"Class Enrolled in Govt school\",\"ur\":\"Class Enrolled in Govt school\",\"pa\":\"Class Enrolled in Govt school\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":20,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"last_lc_level\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Last LC level of child (at which the child was taught at LC)\",\"hi\":\"Last LC level of child (at which the child was taught at LC)\",\"mr\":\"Last LC level of child (at which the child was taught at LC)\",\"gu\":\"Last LC level of child (at which the child was taught at LC)\",\"bn\":\"Last LC level of child (at which the child was taught at LC)\",\"as\":\"Last LC level of child (at which the child was taught at LC)\",\"or\":\"Last LC level of child (at which the child was taught at LC)\",\"te\":\"Last LC level of child (at which the child was taught at LC)\",\"kn\":\"Last LC level of child (at which the child was taught at LC)\",\"ta\":\"Last LC level of child (at which the child was taught at LC)\",\"ur\":\"Last LC level of child (at which the child was taught at LC)\",\"pa\":\"Last LC level of child (at which the child was taught at LC)\"},\"elementTooltip\":{\"en\":\"Last LC level of child (at which the child was taught at LC)\",\"hi\":\"Last LC level of child (at which the child was taught at LC)\",\"mr\":\"Last LC level of child (at which the child was taught at LC)\",\"gu\":\"Last LC level of child (at which the child was taught at LC)\",\"bn\":\"Last LC level of child (at which the child was taught at LC)\",\"as\":\"Last LC level of child (at which the child was taught at LC)\",\"or\":\"Last LC level of child (at which the child was taught at LC)\",\"te\":\"Last LC level of child (at which the child was taught at LC)\",\"kn\":\"Last LC level of child (at which the child was taught at LC)\",\"ta\":\"Last LC level of child (at which the child was taught at LC)\",\"ur\":\"Last LC level of child (at which the child was taught at LC)\",\"pa\":\"Last LC level of child (at which the child was taught at LC)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":21,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"grade_for_which_the_tool_is_given\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Grade for which the tool is Given\",\"hi\":\"Grade for which the tool is Given\",\"mr\":\"Grade for which the tool is Given\",\"gu\":\"Grade for which the tool is Given\",\"bn\":\"Grade for which the tool is Given\",\"as\":\"Grade for which the tool is Given\",\"or\":\"Grade for which the tool is Given\",\"te\":\"Grade for which the tool is Given\",\"kn\":\"Grade for which the tool is Given\",\"ta\":\"Grade for which the tool is Given\",\"ur\":\"Grade for which the tool is Given\",\"pa\":\"Grade for which the tool is Given\"},\"elementTooltip\":{\"en\":\"Grade for which the tool is Given\",\"hi\":\"Grade for which the tool is Given\",\"mr\":\"Grade for which the tool is Given\",\"gu\":\"Grade for which the tool is Given\",\"bn\":\"Grade for which the tool is Given\",\"as\":\"Grade for which the tool is Given\",\"or\":\"Grade for which the tool is Given\",\"te\":\"Grade for which the tool is Given\",\"kn\":\"Grade for which the tool is Given\",\"ta\":\"Grade for which the tool is Given\",\"ur\":\"Grade for which the tool is Given\",\"pa\":\"Grade for which the tool is Given\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":22,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"overall_lbl\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Score\",\"hi\":\"Overall Score\",\"mr\":\"Overall Score\",\"gu\":\"Overall Score\",\"bn\":\"Overall Score\",\"as\":\"Overall Score\",\"or\":\"Overall Score\",\"te\":\"Overall Score\",\"kn\":\"Overall Score\",\"ta\":\"Overall Score\",\"ur\":\"Overall Score\",\"pa\":\"Overall Score\"},\"elementTooltip\":{\"en\":\"Overall Score\",\"hi\":\"Overall Score\",\"mr\":\"Overall Score\",\"gu\":\"Overall Score\",\"bn\":\"Overall Score\",\"as\":\"Overall Score\",\"or\":\"Overall Score\",\"te\":\"Overall Score\",\"kn\":\"Overall Score\",\"ta\":\"Overall Score\",\"ur\":\"Overall Score\",\"pa\":\"Overall Score\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":23,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"overall_foundation_level\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":0,\"max_val\":50,\"elementLabel\":{\"en\":\"Overall Scores in Foundation Level oral tool\",\"hi\":\"Overall Scores in Foundation Level oral tool\",\"mr\":\"Overall Scores in Foundation Level oral tool\",\"gu\":\"Overall Scores in Foundation Level oral tool\",\"bn\":\"Overall Scores in Foundation Level oral tool\",\"as\":\"Overall Scores in Foundation Level oral tool\",\"or\":\"Overall Scores in Foundation Level oral tool\",\"te\":\"Overall Scores in Foundation Level oral tool\",\"kn\":\"Overall Scores in Foundation Level oral tool\",\"ta\":\"Overall Scores in Foundation Level oral tool\",\"ur\":\"Overall Scores in Foundation Level oral tool\",\"pa\":\"Overall Scores in Foundation Level oral tool\"},\"elementTooltip\":{\"en\":\"Overall Scores in Foundation Level oral tool\",\"hi\":\"Overall Scores in Foundation Level oral tool\",\"mr\":\"Overall Scores in Foundation Level oral tool\",\"gu\":\"Overall Scores in Foundation Level oral tool\",\"bn\":\"Overall Scores in Foundation Level oral tool\",\"as\":\"Overall Scores in Foundation Level oral tool\",\"or\":\"Overall Scores in Foundation Level oral tool\",\"te\":\"Overall Scores in Foundation Level oral tool\",\"kn\":\"Overall Scores in Foundation Level oral tool\",\"ta\":\"Overall Scores in Foundation Level oral tool\",\"ur\":\"Overall Scores in Foundation Level oral tool\",\"pa\":\"Overall Scores in Foundation Level oral tool\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":24,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lang_overall_scores\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":0,\"max_val\":50,\"elementLabel\":{\"en\":\"Hindi/Odia/Bengali (Overall Scores)\",\"hi\":\"Hindi/Odia/Bengali (Overall Scores)\",\"mr\":\"Hindi/Odia/Bengali (Overall Scores)\",\"gu\":\"Hindi/Odia/Bengali (Overall Scores)\",\"bn\":\"Hindi/Odia/Bengali (Overall Scores)\",\"as\":\"Hindi/Odia/Bengali (Overall Scores)\",\"or\":\"Hindi/Odia/Bengali (Overall Scores)\",\"te\":\"Hindi/Odia/Bengali (Overall Scores)\",\"kn\":\"Hindi/Odia/Bengali (Overall Scores)\",\"ta\":\"Hindi/Odia/Bengali (Overall Scores)\",\"ur\":\"Hindi/Odia/Bengali (Overall Scores)\",\"pa\":\"Hindi/Odia/Bengali (Overall Scores)\"},\"elementTooltip\":{\"en\":\"Hindi/Odia/Bengali (Overall Scores)\",\"hi\":\"Hindi/Odia/Bengali (Overall Scores)\",\"mr\":\"Hindi/Odia/Bengali (Overall Scores)\",\"gu\":\"Hindi/Odia/Bengali (Overall Scores)\",\"bn\":\"Hindi/Odia/Bengali (Overall Scores)\",\"as\":\"Hindi/Odia/Bengali (Overall Scores)\",\"or\":\"Hindi/Odia/Bengali (Overall Scores)\",\"te\":\"Hindi/Odia/Bengali (Overall Scores)\",\"kn\":\"Hindi/Odia/Bengali (Overall Scores)\",\"ta\":\"Hindi/Odia/Bengali (Overall Scores)\",\"ur\":\"Hindi/Odia/Bengali (Overall Scores)\",\"pa\":\"Hindi/Odia/Bengali (Overall Scores)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":25,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"math_overall_scores\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":0,\"max_val\":50,\"elementLabel\":{\"en\":\"Mathematics (Overall Scores)\",\"hi\":\"Mathematics (Overall Scores)\",\"mr\":\"Mathematics (Overall Scores)\",\"gu\":\"Mathematics (Overall Scores)\",\"bn\":\"Mathematics (Overall Scores)\",\"as\":\"Mathematics (Overall Scores)\",\"or\":\"Mathematics (Overall Scores)\",\"te\":\"Mathematics (Overall Scores)\",\"kn\":\"Mathematics (Overall Scores)\",\"ta\":\"Mathematics (Overall Scores)\",\"ur\":\"Mathematics (Overall Scores)\",\"pa\":\"Mathematics (Overall Scores)\"},\"elementTooltip\":{\"en\":\"Mathematics (Overall Scores)\",\"hi\":\"Mathematics (Overall Scores)\",\"mr\":\"Mathematics (Overall Scores)\",\"gu\":\"Mathematics (Overall Scores)\",\"bn\":\"Mathematics (Overall Scores)\",\"as\":\"Mathematics (Overall Scores)\",\"or\":\"Mathematics (Overall Scores)\",\"te\":\"Mathematics (Overall Scores)\",\"kn\":\"Mathematics (Overall Scores)\",\"ta\":\"Mathematics (Overall Scores)\",\"ur\":\"Mathematics (Overall Scores)\",\"pa\":\"Mathematics (Overall Scores)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":26,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eng_overall_scores\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":0,\"max_val\":50,\"elementLabel\":{\"en\":\"English (Overall Scores)\",\"hi\":\"English (Overall Scores)\",\"mr\":\"English (Overall Scores)\",\"gu\":\"English (Overall Scores)\",\"bn\":\"English (Overall Scores)\",\"as\":\"English (Overall Scores)\",\"or\":\"English (Overall Scores)\",\"te\":\"English (Overall Scores)\",\"kn\":\"English (Overall Scores)\",\"ta\":\"English (Overall Scores)\",\"ur\":\"English (Overall Scores)\",\"pa\":\"English (Overall Scores)\"},\"elementTooltip\":{\"en\":\"English (Overall Scores)\",\"hi\":\"English (Overall Scores)\",\"mr\":\"English (Overall Scores)\",\"gu\":\"English (Overall Scores)\",\"bn\":\"English (Overall Scores)\",\"as\":\"English (Overall Scores)\",\"or\":\"English (Overall Scores)\",\"te\":\"English (Overall Scores)\",\"kn\":\"English (Overall Scores)\",\"ta\":\"English (Overall Scores)\",\"ur\":\"English (Overall Scores)\",\"pa\":\"English (Overall Scores)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":27,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"evs_overall_scores\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"EVS (Overall Scores)\",\"hi\":\"EVS (Overall Scores)\",\"mr\":\"EVS (Overall Scores)\",\"gu\":\"EVS (Overall Scores)\",\"bn\":\"EVS (Overall Scores)\",\"as\":\"EVS (Overall Scores)\",\"or\":\"EVS (Overall Scores)\",\"te\":\"EVS (Overall Scores)\",\"kn\":\"EVS (Overall Scores)\",\"ta\":\"EVS (Overall Scores)\",\"ur\":\"EVS (Overall Scores)\",\"pa\":\"EVS (Overall Scores)\"},\"elementTooltip\":{\"en\":\"EVS (Overall Scores)\",\"hi\":\"EVS (Overall Scores)\",\"mr\":\"EVS (Overall Scores)\",\"gu\":\"EVS (Overall Scores)\",\"bn\":\"EVS (Overall Scores)\",\"as\":\"EVS (Overall Scores)\",\"or\":\"EVS (Overall Scores)\",\"te\":\"EVS (Overall Scores)\",\"kn\":\"EVS (Overall Scores)\",\"ta\":\"EVS (Overall Scores)\",\"ur\":\"EVS (Overall Scores)\",\"pa\":\"EVS (Overall Scores)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":28,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"l_overall_up_lbl\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Lang Overall Scores in UP grade\",\"hi\":\"Lang Overall Scores in UP grade\",\"mr\":\"Lang Overall Scores in UP grade\",\"gu\":\"Lang Overall Scores in UP grade\",\"bn\":\"Lang Overall Scores in UP grade\",\"as\":\"Lang Overall Scores in UP grade\",\"or\":\"Lang Overall Scores in UP grade\",\"te\":\"Lang Overall Scores in UP grade\",\"kn\":\"Lang Overall Scores in UP grade\",\"ta\":\"Lang Overall Scores in UP grade\",\"ur\":\"Lang Overall Scores in UP grade\",\"pa\":\"Lang Overall Scores in UP grade\"},\"elementTooltip\":{\"en\":\"Lang Overall Scores in UP grade\",\"hi\":\"Lang Overall Scores in UP grade\",\"mr\":\"Lang Overall Scores in UP grade\",\"gu\":\"Lang Overall Scores in UP grade\",\"bn\":\"Lang Overall Scores in UP grade\",\"as\":\"Lang Overall Scores in UP grade\",\"or\":\"Lang Overall Scores in UP grade\",\"te\":\"Lang Overall Scores in UP grade\",\"kn\":\"Lang Overall Scores in UP grade\",\"ta\":\"Lang Overall Scores in UP grade\",\"ur\":\"Lang Overall Scores in UP grade\",\"pa\":\"Lang Overall Scores in UP grade\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":29,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_1_up\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"hi\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"mr\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"gu\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"bn\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"as\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"or\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"te\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"kn\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"ta\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"ur\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"pa\":\"Overall Scores of 1st Upper Grade Language (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"hi\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"mr\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"gu\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"bn\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"as\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"or\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"te\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"kn\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"ta\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"ur\":\"Overall Scores of 1st Upper Grade Language (If application)\",\"pa\":\"Overall Scores of 1st Upper Grade Language (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":30,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_2_up\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 2nd upper grade Language (If application)\",\"hi\":\"Overall Scores of 2nd upper grade Language (If application)\",\"mr\":\"Overall Scores of 2nd upper grade Language (If application)\",\"gu\":\"Overall Scores of 2nd upper grade Language (If application)\",\"bn\":\"Overall Scores of 2nd upper grade Language (If application)\",\"as\":\"Overall Scores of 2nd upper grade Language (If application)\",\"or\":\"Overall Scores of 2nd upper grade Language (If application)\",\"te\":\"Overall Scores of 2nd upper grade Language (If application)\",\"kn\":\"Overall Scores of 2nd upper grade Language (If application)\",\"ta\":\"Overall Scores of 2nd upper grade Language (If application)\",\"ur\":\"Overall Scores of 2nd upper grade Language (If application)\",\"pa\":\"Overall Scores of 2nd upper grade Language (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 2nd upper grade Language (If application)\",\"hi\":\"Overall Scores of 2nd upper grade Language (If application)\",\"mr\":\"Overall Scores of 2nd upper grade Language (If application)\",\"gu\":\"Overall Scores of 2nd upper grade Language (If application)\",\"bn\":\"Overall Scores of 2nd upper grade Language (If application)\",\"as\":\"Overall Scores of 2nd upper grade Language (If application)\",\"or\":\"Overall Scores of 2nd upper grade Language (If application)\",\"te\":\"Overall Scores of 2nd upper grade Language (If application)\",\"kn\":\"Overall Scores of 2nd upper grade Language (If application)\",\"ta\":\"Overall Scores of 2nd upper grade Language (If application)\",\"ur\":\"Overall Scores of 2nd upper grade Language (If application)\",\"pa\":\"Overall Scores of 2nd upper grade Language (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":31,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_3_up\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"hi\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"mr\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"gu\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"bn\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"as\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"or\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"te\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"kn\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"ta\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"ur\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"pa\":\"Overall Scores of 3rd upper grade Language (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"hi\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"mr\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"gu\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"bn\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"as\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"or\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"te\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"kn\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"ta\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"ur\":\"Overall Scores of 3rd upper grade Language (If Applicable)\",\"pa\":\"Overall Scores of 3rd upper grade Language (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":32,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_4_up\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"hi\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"mr\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"gu\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"bn\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"as\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"or\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"te\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"kn\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"ta\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"ur\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"pa\":\"Overall Scores of 4th upper grade Language (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"hi\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"mr\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"gu\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"bn\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"as\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"or\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"te\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"kn\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"ta\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"ur\":\"Overall Scores of 4th upper grade Language (If Applicable)\",\"pa\":\"Overall Scores of 4th upper grade Language (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":33,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"l_overall_low_lbl\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Lang Overall Scores in Low grade\",\"hi\":\"Lang Overall Scores in Low grade\",\"mr\":\"Lang Overall Scores in Low grade\",\"gu\":\"Lang Overall Scores in Low grade\",\"bn\":\"Lang Overall Scores in Low grade\",\"as\":\"Lang Overall Scores in Low grade\",\"or\":\"Lang Overall Scores in Low grade\",\"te\":\"Lang Overall Scores in Low grade\",\"kn\":\"Lang Overall Scores in Low grade\",\"ta\":\"Lang Overall Scores in Low grade\",\"ur\":\"Lang Overall Scores in Low grade\",\"pa\":\"Lang Overall Scores in Low grade\"},\"elementTooltip\":{\"en\":\"Lang Overall Scores in Low grade\",\"hi\":\"Lang Overall Scores in Low grade\",\"mr\":\"Lang Overall Scores in Low grade\",\"gu\":\"Lang Overall Scores in Low grade\",\"bn\":\"Lang Overall Scores in Low grade\",\"as\":\"Lang Overall Scores in Low grade\",\"or\":\"Lang Overall Scores in Low grade\",\"te\":\"Lang Overall Scores in Low grade\",\"kn\":\"Lang Overall Scores in Low grade\",\"ta\":\"Lang Overall Scores in Low grade\",\"ur\":\"Lang Overall Scores in Low grade\",\"pa\":\"Lang Overall Scores in Low grade\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":34,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_1_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"hi\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"mr\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"gu\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"bn\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"as\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"or\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"te\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"kn\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"ta\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"ur\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"pa\":\"Overall Scores of 1st Lower Grade Language (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"hi\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"mr\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"gu\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"bn\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"as\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"or\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"te\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"kn\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"ta\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"ur\":\"Overall Scores of 1st Lower Grade Language (If application)\",\"pa\":\"Overall Scores of 1st Lower Grade Language (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":35,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_2_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"hi\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"mr\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"gu\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"bn\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"as\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"or\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"te\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"kn\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"ta\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"ur\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"pa\":\"Overall Scores of 2nd Lower grade Language (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"hi\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"mr\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"gu\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"bn\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"as\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"or\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"te\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"kn\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"ta\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"ur\":\"Overall Scores of 2nd Lower grade Language (If application)\",\"pa\":\"Overall Scores of 2nd Lower grade Language (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":36,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_3_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"hi\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"mr\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"gu\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"bn\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"as\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"or\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"te\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"kn\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"ta\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"ur\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"pa\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"hi\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"mr\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"gu\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"bn\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"as\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"or\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"te\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"kn\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"ta\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"ur\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\",\"pa\":\"Overall Scores of 3rd Lower grade Language (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":37,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"l_overall_scores_4_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"hi\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"mr\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"gu\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"bn\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"as\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"or\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"te\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"kn\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"ta\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"ur\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"pa\":\"Overall Scores of 4th Lower grade Language (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"hi\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"mr\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"gu\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"bn\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"as\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"or\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"te\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"kn\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"ta\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"ur\":\"Overall Scores of 4th Lower grade Language (If Applicable)\",\"pa\":\"Overall Scores of 4th Lower grade Language (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":38,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"m_overall_up_lbl\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Math Overall Scores in UP grade\",\"hi\":\"Math Overall Scores in UP grade\",\"mr\":\"Math Overall Scores in UP grade\",\"gu\":\"Math Overall Scores in UP grade\",\"bn\":\"Math Overall Scores in UP grade\",\"as\":\"Math Overall Scores in UP grade\",\"or\":\"Math Overall Scores in UP grade\",\"te\":\"Math Overall Scores in UP grade\",\"kn\":\"Math Overall Scores in UP grade\",\"ta\":\"Math Overall Scores in UP grade\",\"ur\":\"Math Overall Scores in UP grade\",\"pa\":\"Math Overall Scores in UP grade\"},\"elementTooltip\":{\"en\":\"Math Overall Scores in UP grade\",\"hi\":\"Math Overall Scores in UP grade\",\"mr\":\"Math Overall Scores in UP grade\",\"gu\":\"Math Overall Scores in UP grade\",\"bn\":\"Math Overall Scores in UP grade\",\"as\":\"Math Overall Scores in UP grade\",\"or\":\"Math Overall Scores in UP grade\",\"te\":\"Math Overall Scores in UP grade\",\"kn\":\"Math Overall Scores in UP grade\",\"ta\":\"Math Overall Scores in UP grade\",\"ur\":\"Math Overall Scores in UP grade\",\"pa\":\"Math Overall Scores in UP grade\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":39,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_1_up\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"as\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"or\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"te\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 1st upper Grade Mathematics (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"as\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"or\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"te\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 1st upper Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 1st upper Grade Mathematics (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":40,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_2_up\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"as\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"or\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"te\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"as\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"or\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"te\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 2nd upper Grade Mathematics (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":41,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_3_up\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 3rd upper grade Mathematics (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":42,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_4_up\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 4th upper grade Mathematics (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":43,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"m_overall_low_lbl\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Math Overall Scores in Low grade\",\"hi\":\"Math Overall Scores in Low grade\",\"mr\":\"Math Overall Scores in Low grade\",\"gu\":\"Math Overall Scores in Low grade\",\"bn\":\"Math Overall Scores in Low grade\",\"as\":\"Math Overall Scores in Low grade\",\"or\":\"Math Overall Scores in Low grade\",\"te\":\"Math Overall Scores in Low grade\",\"kn\":\"Math Overall Scores in Low grade\",\"ta\":\"Math Overall Scores in Low grade\",\"ur\":\"Math Overall Scores in Low grade\",\"pa\":\"Math Overall Scores in Low grade\"},\"elementTooltip\":{\"en\":\"Math Overall Scores in Low grade\",\"hi\":\"Math Overall Scores in Low grade\",\"mr\":\"Math Overall Scores in Low grade\",\"gu\":\"Math Overall Scores in Low grade\",\"bn\":\"Math Overall Scores in Low grade\",\"as\":\"Math Overall Scores in Low grade\",\"or\":\"Math Overall Scores in Low grade\",\"te\":\"Math Overall Scores in Low grade\",\"kn\":\"Math Overall Scores in Low grade\",\"ta\":\"Math Overall Scores in Low grade\",\"ur\":\"Math Overall Scores in Low grade\",\"pa\":\"Math Overall Scores in Low grade\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":44,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_1_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"as\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"or\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"te\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 1st lower Grade Mathematics (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"as\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"or\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"te\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 1st lower Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 1st lower Grade Mathematics (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":45,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_2_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"as\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"or\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"te\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"hi\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"mr\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"gu\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"bn\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"as\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"or\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"te\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"kn\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"ta\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"ur\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\",\"pa\":\"Overall Scores of 2nd lower Grade Mathematics (If application)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":46,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_3_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 3rd lower grade Mathematics (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":47,\"element_type\":\"ElementText\",\"element_size\":3,\"database_param\":\"m_overall_scores_4_Lower\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\"},\"elementTooltip\":{\"en\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"hi\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"mr\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"gu\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"bn\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"as\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"or\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"te\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"kn\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"ta\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"ur\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\",\"pa\":\"Overall Scores of 4th lower grade Mathematics (If Applicable)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":48,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"l_writing\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Lang Writing\",\"hi\":\"Lang Writing\",\"mr\":\"Lang Writing\",\"gu\":\"Lang Writing\",\"bn\":\"Lang Writing\",\"as\":\"Lang Writing\",\"or\":\"Lang Writing\",\"te\":\"Lang Writing\",\"kn\":\"Lang Writing\",\"ta\":\"Lang Writing\",\"ur\":\"Lang Writing\",\"pa\":\"Lang Writing\"},\"elementTooltip\":{\"en\":\"Lang Writing\",\"hi\":\"Lang Writing\",\"mr\":\"Lang Writing\",\"gu\":\"Lang Writing\",\"bn\":\"Lang Writing\",\"as\":\"Lang Writing\",\"or\":\"Lang Writing\",\"te\":\"Lang Writing\",\"kn\":\"Lang Writing\",\"ta\":\"Lang Writing\",\"ur\":\"Lang Writing\",\"pa\":\"Lang Writing\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":49,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q1\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 1 \",\"hi\":\"Language Question No. 1 \",\"mr\":\"Language Question No. 1 \",\"gu\":\"Language Question No. 1 \",\"bn\":\"Language Question No. 1 \",\"as\":\"Language Question No. 1 \",\"or\":\"Language Question No. 1 \",\"te\":\"Language Question No. 1 \",\"kn\":\"Language Question No. 1 \",\"ta\":\"Language Question No. 1 \",\"ur\":\"Language Question No. 1 \",\"pa\":\"Language Question No. 1 \"},\"elementTooltip\":{\"en\":\"Language Question No. 1 \",\"hi\":\"Language Question No. 1 \",\"mr\":\"Language Question No. 1 \",\"gu\":\"Language Question No. 1 \",\"bn\":\"Language Question No. 1 \",\"as\":\"Language Question No. 1 \",\"or\":\"Language Question No. 1 \",\"te\":\"Language Question No. 1 \",\"kn\":\"Language Question No. 1 \",\"ta\":\"Language Question No. 1 \",\"ur\":\"Language Question No. 1 \",\"pa\":\"Language Question No. 1 \"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":50,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q2\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 2 \",\"hi\":\"Language Question No. 2 \",\"mr\":\"Language Question No. 2 \",\"gu\":\"Language Question No. 2 \",\"bn\":\"Language Question No. 2 \",\"as\":\"Language Question No. 2 \",\"or\":\"Language Question No. 2 \",\"te\":\"Language Question No. 2 \",\"kn\":\"Language Question No. 2 \",\"ta\":\"Language Question No. 2 \",\"ur\":\"Language Question No. 2 \",\"pa\":\"Language Question No. 2 \"},\"elementTooltip\":{\"en\":\"Language Question No. 2 \",\"hi\":\"Language Question No. 2 \",\"mr\":\"Language Question No. 2 \",\"gu\":\"Language Question No. 2 \",\"bn\":\"Language Question No. 2 \",\"as\":\"Language Question No. 2 \",\"or\":\"Language Question No. 2 \",\"te\":\"Language Question No. 2 \",\"kn\":\"Language Question No. 2 \",\"ta\":\"Language Question No. 2 \",\"ur\":\"Language Question No. 2 \",\"pa\":\"Language Question No. 2 \"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":51,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q3\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 3\",\"hi\":\"Language Question No. 3\",\"mr\":\"Language Question No. 3\",\"gu\":\"Language Question No. 3\",\"bn\":\"Language Question No. 3\",\"as\":\"Language Question No. 3\",\"or\":\"Language Question No. 3\",\"te\":\"Language Question No. 3\",\"kn\":\"Language Question No. 3\",\"ta\":\"Language Question No. 3\",\"ur\":\"Language Question No. 3\",\"pa\":\"Language Question No. 3\"},\"elementTooltip\":{\"en\":\"Language Question No. 3\",\"hi\":\"Language Question No. 3\",\"mr\":\"Language Question No. 3\",\"gu\":\"Language Question No. 3\",\"bn\":\"Language Question No. 3\",\"as\":\"Language Question No. 3\",\"or\":\"Language Question No. 3\",\"te\":\"Language Question No. 3\",\"kn\":\"Language Question No. 3\",\"ta\":\"Language Question No. 3\",\"ur\":\"Language Question No. 3\",\"pa\":\"Language Question No. 3\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":52,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q4\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 4\",\"hi\":\"Language Question No. 4\",\"mr\":\"Language Question No. 4\",\"gu\":\"Language Question No. 4\",\"bn\":\"Language Question No. 4\",\"as\":\"Language Question No. 4\",\"or\":\"Language Question No. 4\",\"te\":\"Language Question No. 4\",\"kn\":\"Language Question No. 4\",\"ta\":\"Language Question No. 4\",\"ur\":\"Language Question No. 4\",\"pa\":\"Language Question No. 4\"},\"elementTooltip\":{\"en\":\"Language Question No. 4\",\"hi\":\"Language Question No. 4\",\"mr\":\"Language Question No. 4\",\"gu\":\"Language Question No. 4\",\"bn\":\"Language Question No. 4\",\"as\":\"Language Question No. 4\",\"or\":\"Language Question No. 4\",\"te\":\"Language Question No. 4\",\"kn\":\"Language Question No. 4\",\"ta\":\"Language Question No. 4\",\"ur\":\"Language Question No. 4\",\"pa\":\"Language Question No. 4\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":53,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q5\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 5\",\"hi\":\"Language Question No. 5\",\"mr\":\"Language Question No. 5\",\"gu\":\"Language Question No. 5\",\"bn\":\"Language Question No. 5\",\"as\":\"Language Question No. 5\",\"or\":\"Language Question No. 5\",\"te\":\"Language Question No. 5\",\"kn\":\"Language Question No. 5\",\"ta\":\"Language Question No. 5\",\"ur\":\"Language Question No. 5\",\"pa\":\"Language Question No. 5\"},\"elementTooltip\":{\"en\":\"Language Question No. 5\",\"hi\":\"Language Question No. 5\",\"mr\":\"Language Question No. 5\",\"gu\":\"Language Question No. 5\",\"bn\":\"Language Question No. 5\",\"as\":\"Language Question No. 5\",\"or\":\"Language Question No. 5\",\"te\":\"Language Question No. 5\",\"kn\":\"Language Question No. 5\",\"ta\":\"Language Question No. 5\",\"ur\":\"Language Question No. 5\",\"pa\":\"Language Question No. 5\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":54,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q6\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 6\",\"hi\":\"Language Question No. 6\",\"mr\":\"Language Question No. 6\",\"gu\":\"Language Question No. 6\",\"bn\":\"Language Question No. 6\",\"as\":\"Language Question No. 6\",\"or\":\"Language Question No. 6\",\"te\":\"Language Question No. 6\",\"kn\":\"Language Question No. 6\",\"ta\":\"Language Question No. 6\",\"ur\":\"Language Question No. 6\",\"pa\":\"Language Question No. 6\"},\"elementTooltip\":{\"en\":\"Language Question No. 6\",\"hi\":\"Language Question No. 6\",\"mr\":\"Language Question No. 6\",\"gu\":\"Language Question No. 6\",\"bn\":\"Language Question No. 6\",\"as\":\"Language Question No. 6\",\"or\":\"Language Question No. 6\",\"te\":\"Language Question No. 6\",\"kn\":\"Language Question No. 6\",\"ta\":\"Language Question No. 6\",\"ur\":\"Language Question No. 6\",\"pa\":\"Language Question No. 6\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":55,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q7\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 7\",\"hi\":\"Language Question No. 7\",\"mr\":\"Language Question No. 7\",\"gu\":\"Language Question No. 7\",\"bn\":\"Language Question No. 7\",\"as\":\"Language Question No. 7\",\"or\":\"Language Question No. 7\",\"te\":\"Language Question No. 7\",\"kn\":\"Language Question No. 7\",\"ta\":\"Language Question No. 7\",\"ur\":\"Language Question No. 7\",\"pa\":\"Language Question No. 7\"},\"elementTooltip\":{\"en\":\"Language Question No. 7\",\"hi\":\"Language Question No. 7\",\"mr\":\"Language Question No. 7\",\"gu\":\"Language Question No. 7\",\"bn\":\"Language Question No. 7\",\"as\":\"Language Question No. 7\",\"or\":\"Language Question No. 7\",\"te\":\"Language Question No. 7\",\"kn\":\"Language Question No. 7\",\"ta\":\"Language Question No. 7\",\"ur\":\"Language Question No. 7\",\"pa\":\"Language Question No. 7\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":56,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q8\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 8\",\"hi\":\"Language Question No. 8\",\"mr\":\"Language Question No. 8\",\"gu\":\"Language Question No. 8\",\"bn\":\"Language Question No. 8\",\"as\":\"Language Question No. 8\",\"or\":\"Language Question No. 8\",\"te\":\"Language Question No. 8\",\"kn\":\"Language Question No. 8\",\"ta\":\"Language Question No. 8\",\"ur\":\"Language Question No. 8\",\"pa\":\"Language Question No. 8\"},\"elementTooltip\":{\"en\":\"Language Question No. 8\",\"hi\":\"Language Question No. 8\",\"mr\":\"Language Question No. 8\",\"gu\":\"Language Question No. 8\",\"bn\":\"Language Question No. 8\",\"as\":\"Language Question No. 8\",\"or\":\"Language Question No. 8\",\"te\":\"Language Question No. 8\",\"kn\":\"Language Question No. 8\",\"ta\":\"Language Question No. 8\",\"ur\":\"Language Question No. 8\",\"pa\":\"Language Question No. 8\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":57,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q9\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 9\",\"hi\":\"Language Question No. 9\",\"mr\":\"Language Question No. 9\",\"gu\":\"Language Question No. 9\",\"bn\":\"Language Question No. 9\",\"as\":\"Language Question No. 9\",\"or\":\"Language Question No. 9\",\"te\":\"Language Question No. 9\",\"kn\":\"Language Question No. 9\",\"ta\":\"Language Question No. 9\",\"ur\":\"Language Question No. 9\",\"pa\":\"Language Question No. 9\"},\"elementTooltip\":{\"en\":\"Language Question No. 9\",\"hi\":\"Language Question No. 9\",\"mr\":\"Language Question No. 9\",\"gu\":\"Language Question No. 9\",\"bn\":\"Language Question No. 9\",\"as\":\"Language Question No. 9\",\"or\":\"Language Question No. 9\",\"te\":\"Language Question No. 9\",\"kn\":\"Language Question No. 9\",\"ta\":\"Language Question No. 9\",\"ur\":\"Language Question No. 9\",\"pa\":\"Language Question No. 9\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":58,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q10\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 10\",\"hi\":\"Language Question No. 10\",\"mr\":\"Language Question No. 10\",\"gu\":\"Language Question No. 10\",\"bn\":\"Language Question No. 10\",\"as\":\"Language Question No. 10\",\"or\":\"Language Question No. 10\",\"te\":\"Language Question No. 10\",\"kn\":\"Language Question No. 10\",\"ta\":\"Language Question No. 10\",\"ur\":\"Language Question No. 10\",\"pa\":\"Language Question No. 10\"},\"elementTooltip\":{\"en\":\"Language Question No. 10\",\"hi\":\"Language Question No. 10\",\"mr\":\"Language Question No. 10\",\"gu\":\"Language Question No. 10\",\"bn\":\"Language Question No. 10\",\"as\":\"Language Question No. 10\",\"or\":\"Language Question No. 10\",\"te\":\"Language Question No. 10\",\"kn\":\"Language Question No. 10\",\"ta\":\"Language Question No. 10\",\"ur\":\"Language Question No. 10\",\"pa\":\"Language Question No. 10\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":59,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q11\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 11\",\"hi\":\"Language Question No. 11\",\"mr\":\"Language Question No. 11\",\"gu\":\"Language Question No. 11\",\"bn\":\"Language Question No. 11\",\"as\":\"Language Question No. 11\",\"or\":\"Language Question No. 11\",\"te\":\"Language Question No. 11\",\"kn\":\"Language Question No. 11\",\"ta\":\"Language Question No. 11\",\"ur\":\"Language Question No. 11\",\"pa\":\"Language Question No. 11\"},\"elementTooltip\":{\"en\":\"Language Question No. 11\",\"hi\":\"Language Question No. 11\",\"mr\":\"Language Question No. 11\",\"gu\":\"Language Question No. 11\",\"bn\":\"Language Question No. 11\",\"as\":\"Language Question No. 11\",\"or\":\"Language Question No. 11\",\"te\":\"Language Question No. 11\",\"kn\":\"Language Question No. 11\",\"ta\":\"Language Question No. 11\",\"ur\":\"Language Question No. 11\",\"pa\":\"Language Question No. 11\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":60,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"l_q12\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Language Question No. 12\",\"hi\":\"Language Question No. 12\",\"mr\":\"Language Question No. 12\",\"gu\":\"Language Question No. 12\",\"bn\":\"Language Question No. 12\",\"as\":\"Language Question No. 12\",\"or\":\"Language Question No. 12\",\"te\":\"Language Question No. 12\",\"kn\":\"Language Question No. 12\",\"ta\":\"Language Question No. 12\",\"ur\":\"Language Question No. 12\",\"pa\":\"Language Question No. 12\"},\"elementTooltip\":{\"en\":\"Language Question No. 12\",\"hi\":\"Language Question No. 12\",\"mr\":\"Language Question No. 12\",\"gu\":\"Language Question No. 12\",\"bn\":\"Language Question No. 12\",\"as\":\"Language Question No. 12\",\"or\":\"Language Question No. 12\",\"te\":\"Language Question No. 12\",\"kn\":\"Language Question No. 12\",\"ta\":\"Language Question No. 12\",\"ur\":\"Language Question No. 12\",\"pa\":\"Language Question No. 12\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":61,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"m_writing\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Math Writing\",\"hi\":\"Math Writing\",\"mr\":\"Math Writing\",\"gu\":\"Math Writing\",\"bn\":\"Math Writing\",\"as\":\"Math Writing\",\"or\":\"Math Writing\",\"te\":\"Math Writing\",\"kn\":\"Math Writing\",\"ta\":\"Math Writing\",\"ur\":\"Math Writing\",\"pa\":\"Math Writing\"},\"elementTooltip\":{\"en\":\"Math Writing\",\"hi\":\"Math Writing\",\"mr\":\"Math Writing\",\"gu\":\"Math Writing\",\"bn\":\"Math Writing\",\"as\":\"Math Writing\",\"or\":\"Math Writing\",\"te\":\"Math Writing\",\"kn\":\"Math Writing\",\"ta\":\"Math Writing\",\"ur\":\"Math Writing\",\"pa\":\"Math Writing\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":62,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q1\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 1\",\"hi\":\"Mathematics Question No. 1\",\"mr\":\"Mathematics Question No. 1\",\"gu\":\"Mathematics Question No. 1\",\"bn\":\"Mathematics Question No. 1\",\"as\":\"Mathematics Question No. 1\",\"or\":\"Mathematics Question No. 1\",\"te\":\"Mathematics Question No. 1\",\"kn\":\"Mathematics Question No. 1\",\"ta\":\"Mathematics Question No. 1\",\"ur\":\"Mathematics Question No. 1\",\"pa\":\"Mathematics Question No. 1\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 1\",\"hi\":\"Mathematics Question No. 1\",\"mr\":\"Mathematics Question No. 1\",\"gu\":\"Mathematics Question No. 1\",\"bn\":\"Mathematics Question No. 1\",\"as\":\"Mathematics Question No. 1\",\"or\":\"Mathematics Question No. 1\",\"te\":\"Mathematics Question No. 1\",\"kn\":\"Mathematics Question No. 1\",\"ta\":\"Mathematics Question No. 1\",\"ur\":\"Mathematics Question No. 1\",\"pa\":\"Mathematics Question No. 1\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":63,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q2\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 2\",\"hi\":\"Mathematics Question No. 2\",\"mr\":\"Mathematics Question No. 2\",\"gu\":\"Mathematics Question No. 2\",\"bn\":\"Mathematics Question No. 2\",\"as\":\"Mathematics Question No. 2\",\"or\":\"Mathematics Question No. 2\",\"te\":\"Mathematics Question No. 2\",\"kn\":\"Mathematics Question No. 2\",\"ta\":\"Mathematics Question No. 2\",\"ur\":\"Mathematics Question No. 2\",\"pa\":\"Mathematics Question No. 2\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 2\",\"hi\":\"Mathematics Question No. 2\",\"mr\":\"Mathematics Question No. 2\",\"gu\":\"Mathematics Question No. 2\",\"bn\":\"Mathematics Question No. 2\",\"as\":\"Mathematics Question No. 2\",\"or\":\"Mathematics Question No. 2\",\"te\":\"Mathematics Question No. 2\",\"kn\":\"Mathematics Question No. 2\",\"ta\":\"Mathematics Question No. 2\",\"ur\":\"Mathematics Question No. 2\",\"pa\":\"Mathematics Question No. 2\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":64,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q3\",\"is_required\":\"true\",\"is_editable\":\"true\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 3\",\"hi\":\"Mathematics Question No. 3\",\"mr\":\"Mathematics Question No. 3\",\"gu\":\"Mathematics Question No. 3\",\"bn\":\"Mathematics Question No. 3\",\"as\":\"Mathematics Question No. 3\",\"or\":\"Mathematics Question No. 3\",\"te\":\"Mathematics Question No. 3\",\"kn\":\"Mathematics Question No. 3\",\"ta\":\"Mathematics Question No. 3\",\"ur\":\"Mathematics Question No. 3\",\"pa\":\"Mathematics Question No. 3\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 3\",\"hi\":\"Mathematics Question No. 3\",\"mr\":\"Mathematics Question No. 3\",\"gu\":\"Mathematics Question No. 3\",\"bn\":\"Mathematics Question No. 3\",\"as\":\"Mathematics Question No. 3\",\"or\":\"Mathematics Question No. 3\",\"te\":\"Mathematics Question No. 3\",\"kn\":\"Mathematics Question No. 3\",\"ta\":\"Mathematics Question No. 3\",\"ur\":\"Mathematics Question No. 3\",\"pa\":\"Mathematics Question No. 3\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":65,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q4\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 4\",\"hi\":\"Mathematics Question No. 4\",\"mr\":\"Mathematics Question No. 4\",\"gu\":\"Mathematics Question No. 4\",\"bn\":\"Mathematics Question No. 4\",\"as\":\"Mathematics Question No. 4\",\"or\":\"Mathematics Question No. 4\",\"te\":\"Mathematics Question No. 4\",\"kn\":\"Mathematics Question No. 4\",\"ta\":\"Mathematics Question No. 4\",\"ur\":\"Mathematics Question No. 4\",\"pa\":\"Mathematics Question No. 4\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 4\",\"hi\":\"Mathematics Question No. 4\",\"mr\":\"Mathematics Question No. 4\",\"gu\":\"Mathematics Question No. 4\",\"bn\":\"Mathematics Question No. 4\",\"as\":\"Mathematics Question No. 4\",\"or\":\"Mathematics Question No. 4\",\"te\":\"Mathematics Question No. 4\",\"kn\":\"Mathematics Question No. 4\",\"ta\":\"Mathematics Question No. 4\",\"ur\":\"Mathematics Question No. 4\",\"pa\":\"Mathematics Question No. 4\"},\"element_data\":{\"options\":[],\"data_paramters\":{\"action\":\"insert\"}},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":66,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q5\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 5\",\"hi\":\"Mathematics Question No. 5\",\"mr\":\"Mathematics Question No. 5\",\"gu\":\"Mathematics Question No. 5\",\"bn\":\"Mathematics Question No. 5\",\"as\":\"Mathematics Question No. 5\",\"or\":\"Mathematics Question No. 5\",\"te\":\"Mathematics Question No. 5\",\"kn\":\"Mathematics Question No. 5\",\"ta\":\"Mathematics Question No. 5\",\"ur\":\"Mathematics Question No. 5\",\"pa\":\"Mathematics Question No. 5\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 5\",\"hi\":\"Mathematics Question No. 5\",\"mr\":\"Mathematics Question No. 5\",\"gu\":\"Mathematics Question No. 5\",\"bn\":\"Mathematics Question No. 5\",\"as\":\"Mathematics Question No. 5\",\"or\":\"Mathematics Question No. 5\",\"te\":\"Mathematics Question No. 5\",\"kn\":\"Mathematics Question No. 5\",\"ta\":\"Mathematics Question No. 5\",\"ur\":\"Mathematics Question No. 5\",\"pa\":\"Mathematics Question No. 5\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":67,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q6\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 6\",\"hi\":\"Mathematics Question No. 6\",\"mr\":\"Mathematics Question No. 6\",\"gu\":\"Mathematics Question No. 6\",\"bn\":\"Mathematics Question No. 6\",\"as\":\"Mathematics Question No. 6\",\"or\":\"Mathematics Question No. 6\",\"te\":\"Mathematics Question No. 6\",\"kn\":\"Mathematics Question No. 6\",\"ta\":\"Mathematics Question No. 6\",\"ur\":\"Mathematics Question No. 6\",\"pa\":\"Mathematics Question No. 6\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 6\",\"hi\":\"Mathematics Question No. 6\",\"mr\":\"Mathematics Question No. 6\",\"gu\":\"Mathematics Question No. 6\",\"bn\":\"Mathematics Question No. 6\",\"as\":\"Mathematics Question No. 6\",\"or\":\"Mathematics Question No. 6\",\"te\":\"Mathematics Question No. 6\",\"kn\":\"Mathematics Question No. 6\",\"ta\":\"Mathematics Question No. 6\",\"ur\":\"Mathematics Question No. 6\",\"pa\":\"Mathematics Question No. 6\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":68,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q7\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 7\",\"hi\":\"Mathematics Question No. 7\",\"mr\":\"Mathematics Question No. 7\",\"gu\":\"Mathematics Question No. 7\",\"bn\":\"Mathematics Question No. 7\",\"as\":\"Mathematics Question No. 7\",\"or\":\"Mathematics Question No. 7\",\"te\":\"Mathematics Question No. 7\",\"kn\":\"Mathematics Question No. 7\",\"ta\":\"Mathematics Question No. 7\",\"ur\":\"Mathematics Question No. 7\",\"pa\":\"Mathematics Question No. 7\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 7\",\"hi\":\"Mathematics Question No. 7\",\"mr\":\"Mathematics Question No. 7\",\"gu\":\"Mathematics Question No. 7\",\"bn\":\"Mathematics Question No. 7\",\"as\":\"Mathematics Question No. 7\",\"or\":\"Mathematics Question No. 7\",\"te\":\"Mathematics Question No. 7\",\"kn\":\"Mathematics Question No. 7\",\"ta\":\"Mathematics Question No. 7\",\"ur\":\"Mathematics Question No. 7\",\"pa\":\"Mathematics Question No. 7\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":69,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q8\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 8\",\"hi\":\"Mathematics Question No. 8\",\"mr\":\"Mathematics Question No. 8\",\"gu\":\"Mathematics Question No. 8\",\"bn\":\"Mathematics Question No. 8\",\"as\":\"Mathematics Question No. 8\",\"or\":\"Mathematics Question No. 8\",\"te\":\"Mathematics Question No. 8\",\"kn\":\"Mathematics Question No. 8\",\"ta\":\"Mathematics Question No. 8\",\"ur\":\"Mathematics Question No. 8\",\"pa\":\"Mathematics Question No. 8\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 8\",\"hi\":\"Mathematics Question No. 8\",\"mr\":\"Mathematics Question No. 8\",\"gu\":\"Mathematics Question No. 8\",\"bn\":\"Mathematics Question No. 8\",\"as\":\"Mathematics Question No. 8\",\"or\":\"Mathematics Question No. 8\",\"te\":\"Mathematics Question No. 8\",\"kn\":\"Mathematics Question No. 8\",\"ta\":\"Mathematics Question No. 8\",\"ur\":\"Mathematics Question No. 8\",\"pa\":\"Mathematics Question No. 8\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":70,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q9\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 9\",\"hi\":\"Mathematics Question No. 9\",\"mr\":\"Mathematics Question No. 9\",\"gu\":\"Mathematics Question No. 9\",\"bn\":\"Mathematics Question No. 9\",\"as\":\"Mathematics Question No. 9\",\"or\":\"Mathematics Question No. 9\",\"te\":\"Mathematics Question No. 9\",\"kn\":\"Mathematics Question No. 9\",\"ta\":\"Mathematics Question No. 9\",\"ur\":\"Mathematics Question No. 9\",\"pa\":\"Mathematics Question No. 9\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 9\",\"hi\":\"Mathematics Question No. 9\",\"mr\":\"Mathematics Question No. 9\",\"gu\":\"Mathematics Question No. 9\",\"bn\":\"Mathematics Question No. 9\",\"as\":\"Mathematics Question No. 9\",\"or\":\"Mathematics Question No. 9\",\"te\":\"Mathematics Question No. 9\",\"kn\":\"Mathematics Question No. 9\",\"ta\":\"Mathematics Question No. 9\",\"ur\":\"Mathematics Question No. 9\",\"pa\":\"Mathematics Question No. 9\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":71,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"m_q10\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Mathematics Question No. 10\",\"hi\":\"Mathematics Question No. 10\",\"mr\":\"Mathematics Question No. 10\",\"gu\":\"Mathematics Question No. 10\",\"bn\":\"Mathematics Question No. 10\",\"as\":\"Mathematics Question No. 10\",\"or\":\"Mathematics Question No. 10\",\"te\":\"Mathematics Question No. 10\",\"kn\":\"Mathematics Question No. 10\",\"ta\":\"Mathematics Question No. 10\",\"ur\":\"Mathematics Question No. 10\",\"pa\":\"Mathematics Question No. 10\"},\"elementTooltip\":{\"en\":\"Mathematics Question No. 10\",\"hi\":\"Mathematics Question No. 10\",\"mr\":\"Mathematics Question No. 10\",\"gu\":\"Mathematics Question No. 10\",\"bn\":\"Mathematics Question No. 10\",\"as\":\"Mathematics Question No. 10\",\"or\":\"Mathematics Question No. 10\",\"te\":\"Mathematics Question No. 10\",\"kn\":\"Mathematics Question No. 10\",\"ta\":\"Mathematics Question No. 10\",\"ur\":\"Mathematics Question No. 10\",\"pa\":\"Mathematics Question No. 10\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":72,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"l_oral\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Lang Oral\",\"hi\":\"Lang Oral\",\"mr\":\"Lang Oral\",\"gu\":\"Lang Oral\",\"bn\":\"Lang Oral\",\"as\":\"Lang Oral\",\"or\":\"Lang Oral\",\"te\":\"Lang Oral\",\"kn\":\"Lang Oral\",\"ta\":\"Lang Oral\",\"ur\":\"Lang Oral\",\"pa\":\"Lang Oral\"},\"elementTooltip\":{\"en\":\"Lang Oral\",\"hi\":\"Lang Oral\",\"mr\":\"Lang Oral\",\"gu\":\"Lang Oral\",\"bn\":\"Lang Oral\",\"as\":\"Lang Oral\",\"or\":\"Lang Oral\",\"te\":\"Lang Oral\",\"kn\":\"Lang Oral\",\"ta\":\"Lang Oral\",\"ur\":\"Lang Oral\",\"pa\":\"Lang Oral\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":73,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lo_1\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"1 Picture Reading\",\"hi\":\"1 Picture Reading\",\"mr\":\"1 Picture Reading\",\"gu\":\"1 Picture Reading\",\"bn\":\"1 Picture Reading\",\"as\":\"1 Picture Reading\",\"or\":\"1 Picture Reading\",\"te\":\"1 Picture Reading\",\"kn\":\"1 Picture Reading\",\"ta\":\"1 Picture Reading\",\"ur\":\"1 Picture Reading\",\"pa\":\"1 Picture Reading\"},\"elementTooltip\":{\"en\":\"1 Picture Reading\",\"hi\":\"1 Picture Reading\",\"mr\":\"1 Picture Reading\",\"gu\":\"1 Picture Reading\",\"bn\":\"1 Picture Reading\",\"as\":\"1 Picture Reading\",\"or\":\"1 Picture Reading\",\"te\":\"1 Picture Reading\",\"kn\":\"1 Picture Reading\",\"ta\":\"1 Picture Reading\",\"ur\":\"1 Picture Reading\",\"pa\":\"1 Picture Reading\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":74,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lo_2\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"2 Para Reading\",\"hi\":\"2 Para Reading\",\"mr\":\"2 Para Reading\",\"gu\":\"2 Para Reading\",\"bn\":\"2 Para Reading\",\"as\":\"2 Para Reading\",\"or\":\"2 Para Reading\",\"te\":\"2 Para Reading\",\"kn\":\"2 Para Reading\",\"ta\":\"2 Para Reading\",\"ur\":\"2 Para Reading\",\"pa\":\"2 Para Reading\"},\"elementTooltip\":{\"en\":\"2 Para Reading\",\"hi\":\"2 Para Reading\",\"mr\":\"2 Para Reading\",\"gu\":\"2 Para Reading\",\"bn\":\"2 Para Reading\",\"as\":\"2 Para Reading\",\"or\":\"2 Para Reading\",\"te\":\"2 Para Reading\",\"kn\":\"2 Para Reading\",\"ta\":\"2 Para Reading\",\"ur\":\"2 Para Reading\",\"pa\":\"2 Para Reading\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":75,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lo_3\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"3 Varn Reading\",\"hi\":\"3 Varn Reading\",\"mr\":\"3 Varn Reading\",\"gu\":\"3 Varn Reading\",\"bn\":\"3 Varn Reading\",\"as\":\"3 Varn Reading\",\"or\":\"3 Varn Reading\",\"te\":\"3 Varn Reading\",\"kn\":\"3 Varn Reading\",\"ta\":\"3 Varn Reading\",\"ur\":\"3 Varn Reading\",\"pa\":\"3 Varn Reading\"},\"elementTooltip\":{\"en\":\"3 Varn Reading\",\"hi\":\"3 Varn Reading\",\"mr\":\"3 Varn Reading\",\"gu\":\"3 Varn Reading\",\"bn\":\"3 Varn Reading\",\"as\":\"3 Varn Reading\",\"or\":\"3 Varn Reading\",\"te\":\"3 Varn Reading\",\"kn\":\"3 Varn Reading\",\"ta\":\"3 Varn Reading\",\"ur\":\"3 Varn Reading\",\"pa\":\"3 Varn Reading\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":76,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lo_4\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"4 Letter Reading\",\"hi\":\"4 Letter Reading\",\"mr\":\"4 Letter Reading\",\"gu\":\"4 Letter Reading\",\"bn\":\"4 Letter Reading\",\"as\":\"4 Letter Reading\",\"or\":\"4 Letter Reading\",\"te\":\"4 Letter Reading\",\"kn\":\"4 Letter Reading\",\"ta\":\"4 Letter Reading\",\"ur\":\"4 Letter Reading\",\"pa\":\"4 Letter Reading\"},\"elementTooltip\":{\"en\":\"4 Letter Reading\",\"hi\":\"4 Letter Reading\",\"mr\":\"4 Letter Reading\",\"gu\":\"4 Letter Reading\",\"bn\":\"4 Letter Reading\",\"as\":\"4 Letter Reading\",\"or\":\"4 Letter Reading\",\"te\":\"4 Letter Reading\",\"kn\":\"4 Letter Reading\",\"ta\":\"4 Letter Reading\",\"ur\":\"4 Letter Reading\",\"pa\":\"4 Letter Reading\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":77,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lo_5\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"5 story Reading\",\"hi\":\"5 story Reading\",\"mr\":\"5 story Reading\",\"gu\":\"5 story Reading\",\"bn\":\"5 story Reading\",\"as\":\"5 story Reading\",\"or\":\"5 story Reading\",\"te\":\"5 story Reading\",\"kn\":\"5 story Reading\",\"ta\":\"5 story Reading\",\"ur\":\"5 story Reading\",\"pa\":\"5 story Reading\"},\"elementTooltip\":{\"en\":\"5 story Reading\",\"hi\":\"5 story Reading\",\"mr\":\"5 story Reading\",\"gu\":\"5 story Reading\",\"bn\":\"5 story Reading\",\"as\":\"5 story Reading\",\"or\":\"5 story Reading\",\"te\":\"5 story Reading\",\"kn\":\"5 story Reading\",\"ta\":\"5 story Reading\",\"ur\":\"5 story Reading\",\"pa\":\"5 story Reading\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":78,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lo_6\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"6 Question Answer\",\"hi\":\"6 Question Answer\",\"mr\":\"6 Question Answer\",\"gu\":\"6 Question Answer\",\"bn\":\"6 Question Answer\",\"as\":\"6 Question Answer\",\"or\":\"6 Question Answer\",\"te\":\"6 Question Answer\",\"kn\":\"6 Question Answer\",\"ta\":\"6 Question Answer\",\"ur\":\"6 Question Answer\",\"pa\":\"6 Question Answer\"},\"elementTooltip\":{\"en\":\"6 Question Answer\",\"hi\":\"6 Question Answer\",\"mr\":\"6 Question Answer\",\"gu\":\"6 Question Answer\",\"bn\":\"6 Question Answer\",\"as\":\"6 Question Answer\",\"or\":\"6 Question Answer\",\"te\":\"6 Question Answer\",\"kn\":\"6 Question Answer\",\"ta\":\"6 Question Answer\",\"ur\":\"6 Question Answer\",\"pa\":\"6 Question Answer\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":79,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"lo_7\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"7 Story Telling\",\"hi\":\"7 Story Telling\",\"mr\":\"7 Story Telling\",\"gu\":\"7 Story Telling\",\"bn\":\"7 Story Telling\",\"as\":\"7 Story Telling\",\"or\":\"7 Story Telling\",\"te\":\"7 Story Telling\",\"kn\":\"7 Story Telling\",\"ta\":\"7 Story Telling\",\"ur\":\"7 Story Telling\",\"pa\":\"7 Story Telling\"},\"elementTooltip\":{\"en\":\"7 Story Telling\",\"hi\":\"7 Story Telling\",\"mr\":\"7 Story Telling\",\"gu\":\"7 Story Telling\",\"bn\":\"7 Story Telling\",\"as\":\"7 Story Telling\",\"or\":\"7 Story Telling\",\"te\":\"7 Story Telling\",\"kn\":\"7 Story Telling\",\"ta\":\"7 Story Telling\",\"ur\":\"7 Story Telling\",\"pa\":\"7 Story Telling\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":80,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"m_oral\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Math Oral\",\"hi\":\"Math Oral\",\"mr\":\"Math Oral\",\"gu\":\"Math Oral\",\"bn\":\"Math Oral\",\"as\":\"Math Oral\",\"or\":\"Math Oral\",\"te\":\"Math Oral\",\"kn\":\"Math Oral\",\"ta\":\"Math Oral\",\"ur\":\"Math Oral\",\"pa\":\"Math Oral\"},\"elementTooltip\":{\"en\":\"Math Oral\",\"hi\":\"Math Oral\",\"mr\":\"Math Oral\",\"gu\":\"Math Oral\",\"bn\":\"Math Oral\",\"as\":\"Math Oral\",\"or\":\"Math Oral\",\"te\":\"Math Oral\",\"kn\":\"Math Oral\",\"ta\":\"Math Oral\",\"ur\":\"Math Oral\",\"pa\":\"Math Oral\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":81,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_nr_20\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"NR 20\",\"hi\":\"NR 20\",\"mr\":\"NR 20\",\"gu\":\"NR 20\",\"bn\":\"NR 20\",\"as\":\"NR 20\",\"or\":\"NR 20\",\"te\":\"NR 20\",\"kn\":\"NR 20\",\"ta\":\"NR 20\",\"ur\":\"NR 20\",\"pa\":\"NR 20\"},\"elementTooltip\":{\"en\":\"NR 20\",\"hi\":\"NR 20\",\"mr\":\"NR 20\",\"gu\":\"NR 20\",\"bn\":\"NR 20\",\"as\":\"NR 20\",\"or\":\"NR 20\",\"te\":\"NR 20\",\"kn\":\"NR 20\",\"ta\":\"NR 20\",\"ur\":\"NR 20\",\"pa\":\"NR 20\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":82,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_nr_99\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"NR 99\",\"hi\":\"NR 99\",\"mr\":\"NR 99\",\"gu\":\"NR 99\",\"bn\":\"NR 99\",\"as\":\"NR 99\",\"or\":\"NR 99\",\"te\":\"NR 99\",\"kn\":\"NR 99\",\"ta\":\"NR 99\",\"ur\":\"NR 99\",\"pa\":\"NR 99\"},\"elementTooltip\":{\"en\":\"NR 99\",\"hi\":\"NR 99\",\"mr\":\"NR 99\",\"gu\":\"NR 99\",\"bn\":\"NR 99\",\"as\":\"NR 99\",\"or\":\"NR 99\",\"te\":\"NR 99\",\"kn\":\"NR 99\",\"ta\":\"NR 99\",\"ur\":\"NR 99\",\"pa\":\"NR 99\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":83,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_nr_999\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"NR 999\",\"hi\":\"NR 999\",\"mr\":\"NR 999\",\"gu\":\"NR 999\",\"bn\":\"NR 999\",\"as\":\"NR 999\",\"or\":\"NR 999\",\"te\":\"NR 999\",\"kn\":\"NR 999\",\"ta\":\"NR 999\",\"ur\":\"NR 999\",\"pa\":\"NR 999\"},\"elementTooltip\":{\"en\":\"NR 999\",\"hi\":\"NR 999\",\"mr\":\"NR 999\",\"gu\":\"NR 999\",\"bn\":\"NR 999\",\"as\":\"NR 999\",\"or\":\"NR 999\",\"te\":\"NR 999\",\"kn\":\"NR 999\",\"ta\":\"NR 999\",\"ur\":\"NR 999\",\"pa\":\"NR 999\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":84,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_add_1d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Addition 1 Digit\",\"hi\":\"Addition 1 Digit\",\"mr\":\"Addition 1 Digit\",\"gu\":\"Addition 1 Digit\",\"bn\":\"Addition 1 Digit\",\"as\":\"Addition 1 Digit\",\"or\":\"Addition 1 Digit\",\"te\":\"Addition 1 Digit\",\"kn\":\"Addition 1 Digit\",\"ta\":\"Addition 1 Digit\",\"ur\":\"Addition 1 Digit\",\"pa\":\"Addition 1 Digit\"},\"elementTooltip\":{\"en\":\"Addition 1 Digit\",\"hi\":\"Addition 1 Digit\",\"mr\":\"Addition 1 Digit\",\"gu\":\"Addition 1 Digit\",\"bn\":\"Addition 1 Digit\",\"as\":\"Addition 1 Digit\",\"or\":\"Addition 1 Digit\",\"te\":\"Addition 1 Digit\",\"kn\":\"Addition 1 Digit\",\"ta\":\"Addition 1 Digit\",\"ur\":\"Addition 1 Digit\",\"pa\":\"Addition 1 Digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":85,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_add_2d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Addition 2 Digit\",\"hi\":\"Addition 2 Digit\",\"mr\":\"Addition 2 Digit\",\"gu\":\"Addition 2 Digit\",\"bn\":\"Addition 2 Digit\",\"as\":\"Addition 2 Digit\",\"or\":\"Addition 2 Digit\",\"te\":\"Addition 2 Digit\",\"kn\":\"Addition 2 Digit\",\"ta\":\"Addition 2 Digit\",\"ur\":\"Addition 2 Digit\",\"pa\":\"Addition 2 Digit\"},\"elementTooltip\":{\"en\":\"Addition 2 Digit\",\"hi\":\"Addition 2 Digit\",\"mr\":\"Addition 2 Digit\",\"gu\":\"Addition 2 Digit\",\"bn\":\"Addition 2 Digit\",\"as\":\"Addition 2 Digit\",\"or\":\"Addition 2 Digit\",\"te\":\"Addition 2 Digit\",\"kn\":\"Addition 2 Digit\",\"ta\":\"Addition 2 Digit\",\"ur\":\"Addition 2 Digit\",\"pa\":\"Addition 2 Digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":86,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_add_3d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Addition 3 Digit\",\"hi\":\"Addition 3 Digit\",\"mr\":\"Addition 3 Digit\",\"gu\":\"Addition 3 Digit\",\"bn\":\"Addition 3 Digit\",\"as\":\"Addition 3 Digit\",\"or\":\"Addition 3 Digit\",\"te\":\"Addition 3 Digit\",\"kn\":\"Addition 3 Digit\",\"ta\":\"Addition 3 Digit\",\"ur\":\"Addition 3 Digit\",\"pa\":\"Addition 3 Digit\"},\"elementTooltip\":{\"en\":\"Addition 3 Digit\",\"hi\":\"Addition 3 Digit\",\"mr\":\"Addition 3 Digit\",\"gu\":\"Addition 3 Digit\",\"bn\":\"Addition 3 Digit\",\"as\":\"Addition 3 Digit\",\"or\":\"Addition 3 Digit\",\"te\":\"Addition 3 Digit\",\"kn\":\"Addition 3 Digit\",\"ta\":\"Addition 3 Digit\",\"ur\":\"Addition 3 Digit\",\"pa\":\"Addition 3 Digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":87,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_sub_1d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Subtraction 1 digit\",\"hi\":\"Subtraction 1 digit\",\"mr\":\"Subtraction 1 digit\",\"gu\":\"Subtraction 1 digit\",\"bn\":\"Subtraction 1 digit\",\"as\":\"Subtraction 1 digit\",\"or\":\"Subtraction 1 digit\",\"te\":\"Subtraction 1 digit\",\"kn\":\"Subtraction 1 digit\",\"ta\":\"Subtraction 1 digit\",\"ur\":\"Subtraction 1 digit\",\"pa\":\"Subtraction 1 digit\"},\"elementTooltip\":{\"en\":\"Subtraction 1 digit\",\"hi\":\"Subtraction 1 digit\",\"mr\":\"Subtraction 1 digit\",\"gu\":\"Subtraction 1 digit\",\"bn\":\"Subtraction 1 digit\",\"as\":\"Subtraction 1 digit\",\"or\":\"Subtraction 1 digit\",\"te\":\"Subtraction 1 digit\",\"kn\":\"Subtraction 1 digit\",\"ta\":\"Subtraction 1 digit\",\"ur\":\"Subtraction 1 digit\",\"pa\":\"Subtraction 1 digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":88,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_sub_2d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Subtraction 2 digit\",\"hi\":\"Subtraction 2 digit\",\"mr\":\"Subtraction 2 digit\",\"gu\":\"Subtraction 2 digit\",\"bn\":\"Subtraction 2 digit\",\"as\":\"Subtraction 2 digit\",\"or\":\"Subtraction 2 digit\",\"te\":\"Subtraction 2 digit\",\"kn\":\"Subtraction 2 digit\",\"ta\":\"Subtraction 2 digit\",\"ur\":\"Subtraction 2 digit\",\"pa\":\"Subtraction 2 digit\"},\"elementTooltip\":{\"en\":\"Subtraction 2 digit\",\"hi\":\"Subtraction 2 digit\",\"mr\":\"Subtraction 2 digit\",\"gu\":\"Subtraction 2 digit\",\"bn\":\"Subtraction 2 digit\",\"as\":\"Subtraction 2 digit\",\"or\":\"Subtraction 2 digit\",\"te\":\"Subtraction 2 digit\",\"kn\":\"Subtraction 2 digit\",\"ta\":\"Subtraction 2 digit\",\"ur\":\"Subtraction 2 digit\",\"pa\":\"Subtraction 2 digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":89,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_sub_3d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Subtraction 3 digit\",\"hi\":\"Subtraction 3 digit\",\"mr\":\"Subtraction 3 digit\",\"gu\":\"Subtraction 3 digit\",\"bn\":\"Subtraction 3 digit\",\"as\":\"Subtraction 3 digit\",\"or\":\"Subtraction 3 digit\",\"te\":\"Subtraction 3 digit\",\"kn\":\"Subtraction 3 digit\",\"ta\":\"Subtraction 3 digit\",\"ur\":\"Subtraction 3 digit\",\"pa\":\"Subtraction 3 digit\"},\"elementTooltip\":{\"en\":\"Subtraction 3 digit\",\"hi\":\"Subtraction 3 digit\",\"mr\":\"Subtraction 3 digit\",\"gu\":\"Subtraction 3 digit\",\"bn\":\"Subtraction 3 digit\",\"as\":\"Subtraction 3 digit\",\"or\":\"Subtraction 3 digit\",\"te\":\"Subtraction 3 digit\",\"kn\":\"Subtraction 3 digit\",\"ta\":\"Subtraction 3 digit\",\"ur\":\"Subtraction 3 digit\",\"pa\":\"Subtraction 3 digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":90,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_mul_1d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Multiplication 1 digit\",\"hi\":\"Multiplication 1 digit\",\"mr\":\"Multiplication 1 digit\",\"gu\":\"Multiplication 1 digit\",\"bn\":\"Multiplication 1 digit\",\"as\":\"Multiplication 1 digit\",\"or\":\"Multiplication 1 digit\",\"te\":\"Multiplication 1 digit\",\"kn\":\"Multiplication 1 digit\",\"ta\":\"Multiplication 1 digit\",\"ur\":\"Multiplication 1 digit\",\"pa\":\"Multiplication 1 digit\"},\"elementTooltip\":{\"en\":\"Multiplication 1 digit\",\"hi\":\"Multiplication 1 digit\",\"mr\":\"Multiplication 1 digit\",\"gu\":\"Multiplication 1 digit\",\"bn\":\"Multiplication 1 digit\",\"as\":\"Multiplication 1 digit\",\"or\":\"Multiplication 1 digit\",\"te\":\"Multiplication 1 digit\",\"kn\":\"Multiplication 1 digit\",\"ta\":\"Multiplication 1 digit\",\"ur\":\"Multiplication 1 digit\",\"pa\":\"Multiplication 1 digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":91,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_mul_2d\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Multiplication 2 digit\",\"hi\":\"Multiplication 2 digit\",\"mr\":\"Multiplication 2 digit\",\"gu\":\"Multiplication 2 digit\",\"bn\":\"Multiplication 2 digit\",\"as\":\"Multiplication 2 digit\",\"or\":\"Multiplication 2 digit\",\"te\":\"Multiplication 2 digit\",\"kn\":\"Multiplication 2 digit\",\"ta\":\"Multiplication 2 digit\",\"ur\":\"Multiplication 2 digit\",\"pa\":\"Multiplication 2 digit\"},\"elementTooltip\":{\"en\":\"Multiplication 2 digit\",\"hi\":\"Multiplication 2 digit\",\"mr\":\"Multiplication 2 digit\",\"gu\":\"Multiplication 2 digit\",\"bn\":\"Multiplication 2 digit\",\"as\":\"Multiplication 2 digit\",\"or\":\"Multiplication 2 digit\",\"te\":\"Multiplication 2 digit\",\"kn\":\"Multiplication 2 digit\",\"ta\":\"Multiplication 2 digit\",\"ur\":\"Multiplication 2 digit\",\"pa\":\"Multiplication 2 digit\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":92,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_div\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Division\",\"hi\":\"Division\",\"mr\":\"Division\",\"gu\":\"Division\",\"bn\":\"Division\",\"as\":\"Division\",\"or\":\"Division\",\"te\":\"Division\",\"kn\":\"Division\",\"ta\":\"Division\",\"ur\":\"Division\",\"pa\":\"Division\"},\"elementTooltip\":{\"en\":\"Division\",\"hi\":\"Division\",\"mr\":\"Division\",\"gu\":\"Division\",\"bn\":\"Division\",\"as\":\"Division\",\"or\":\"Division\",\"te\":\"Division\",\"kn\":\"Division\",\"ta\":\"Division\",\"ur\":\"Division\",\"pa\":\"Division\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":93,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"mo_shapes\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Shapes\",\"hi\":\"Shapes\",\"mr\":\"Shapes\",\"gu\":\"Shapes\",\"bn\":\"Shapes\",\"as\":\"Shapes\",\"or\":\"Shapes\",\"te\":\"Shapes\",\"kn\":\"Shapes\",\"ta\":\"Shapes\",\"ur\":\"Shapes\",\"pa\":\"Shapes\"},\"elementTooltip\":{\"en\":\"Shapes\",\"hi\":\"Shapes\",\"mr\":\"Shapes\",\"gu\":\"Shapes\",\"bn\":\"Shapes\",\"as\":\"Shapes\",\"or\":\"Shapes\",\"te\":\"Shapes\",\"kn\":\"Shapes\",\"ta\":\"Shapes\",\"ur\":\"Shapes\",\"pa\":\"Shapes\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":94,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"e_oral\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Eng Oral\",\"hi\":\"Eng Oral\",\"mr\":\"Eng Oral\",\"gu\":\"Eng Oral\",\"bn\":\"Eng Oral\",\"as\":\"Eng Oral\",\"or\":\"Eng Oral\",\"te\":\"Eng Oral\",\"kn\":\"Eng Oral\",\"ta\":\"Eng Oral\",\"ur\":\"Eng Oral\",\"pa\":\"Eng Oral\"},\"elementTooltip\":{\"en\":\"Eng Oral\",\"hi\":\"Eng Oral\",\"mr\":\"Eng Oral\",\"gu\":\"Eng Oral\",\"bn\":\"Eng Oral\",\"as\":\"Eng Oral\",\"or\":\"Eng Oral\",\"te\":\"Eng Oral\",\"kn\":\"Eng Oral\",\"ta\":\"Eng Oral\",\"ur\":\"Eng Oral\",\"pa\":\"Eng Oral\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":95,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_beg\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Beginner\",\"hi\":\"Beginner\",\"mr\":\"Beginner\",\"gu\":\"Beginner\",\"bn\":\"Beginner\",\"as\":\"Beginner\",\"or\":\"Beginner\",\"te\":\"Beginner\",\"kn\":\"Beginner\",\"ta\":\"Beginner\",\"ur\":\"Beginner\",\"pa\":\"Beginner\"},\"elementTooltip\":{\"en\":\"Beginner\",\"hi\":\"Beginner\",\"mr\":\"Beginner\",\"gu\":\"Beginner\",\"bn\":\"Beginner\",\"as\":\"Beginner\",\"or\":\"Beginner\",\"te\":\"Beginner\",\"kn\":\"Beginner\",\"ta\":\"Beginner\",\"ur\":\"Beginner\",\"pa\":\"Beginner\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":96,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q1\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q1 -Picture\",\"hi\":\"Q1 -Picture\",\"mr\":\"Q1 -Picture\",\"gu\":\"Q1 -Picture\",\"bn\":\"Q1 -Picture\",\"as\":\"Q1 -Picture\",\"or\":\"Q1 -Picture\",\"te\":\"Q1 -Picture\",\"kn\":\"Q1 -Picture\",\"ta\":\"Q1 -Picture\",\"ur\":\"Q1 -Picture\",\"pa\":\"Q1 -Picture\"},\"elementTooltip\":{\"en\":\"Q1 -Picture\",\"hi\":\"Q1 -Picture\",\"mr\":\"Q1 -Picture\",\"gu\":\"Q1 -Picture\",\"bn\":\"Q1 -Picture\",\"as\":\"Q1 -Picture\",\"or\":\"Q1 -Picture\",\"te\":\"Q1 -Picture\",\"kn\":\"Q1 -Picture\",\"ta\":\"Q1 -Picture\",\"ur\":\"Q1 -Picture\",\"pa\":\"Q1 -Picture\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":97,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q2\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q2 -Reciting Poems\",\"hi\":\"Q2 -Reciting Poems\",\"mr\":\"Q2 -Reciting Poems\",\"gu\":\"Q2 -Reciting Poems\",\"bn\":\"Q2 -Reciting Poems\",\"as\":\"Q2 -Reciting Poems\",\"or\":\"Q2 -Reciting Poems\",\"te\":\"Q2 -Reciting Poems\",\"kn\":\"Q2 -Reciting Poems\",\"ta\":\"Q2 -Reciting Poems\",\"ur\":\"Q2 -Reciting Poems\",\"pa\":\"Q2 -Reciting Poems\"},\"elementTooltip\":{\"en\":\"Q2 -Reciting Poems\",\"hi\":\"Q2 -Reciting Poems\",\"mr\":\"Q2 -Reciting Poems\",\"gu\":\"Q2 -Reciting Poems\",\"bn\":\"Q2 -Reciting Poems\",\"as\":\"Q2 -Reciting Poems\",\"or\":\"Q2 -Reciting Poems\",\"te\":\"Q2 -Reciting Poems\",\"kn\":\"Q2 -Reciting Poems\",\"ta\":\"Q2 -Reciting Poems\",\"ur\":\"Q2 -Reciting Poems\",\"pa\":\"Q2 -Reciting Poems\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":98,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q3\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q3-Letter\",\"hi\":\"Q3-Letter\",\"mr\":\"Q3-Letter\",\"gu\":\"Q3-Letter\",\"bn\":\"Q3-Letter\",\"as\":\"Q3-Letter\",\"or\":\"Q3-Letter\",\"te\":\"Q3-Letter\",\"kn\":\"Q3-Letter\",\"ta\":\"Q3-Letter\",\"ur\":\"Q3-Letter\",\"pa\":\"Q3-Letter\"},\"elementTooltip\":{\"en\":\"Q3-Letter\",\"hi\":\"Q3-Letter\",\"mr\":\"Q3-Letter\",\"gu\":\"Q3-Letter\",\"bn\":\"Q3-Letter\",\"as\":\"Q3-Letter\",\"or\":\"Q3-Letter\",\"te\":\"Q3-Letter\",\"kn\":\"Q3-Letter\",\"ta\":\"Q3-Letter\",\"ur\":\"Q3-Letter\",\"pa\":\"Q3-Letter\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":99,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q4\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q4-Words\",\"hi\":\"Q4-Words\",\"mr\":\"Q4-Words\",\"gu\":\"Q4-Words\",\"bn\":\"Q4-Words\",\"as\":\"Q4-Words\",\"or\":\"Q4-Words\",\"te\":\"Q4-Words\",\"kn\":\"Q4-Words\",\"ta\":\"Q4-Words\",\"ur\":\"Q4-Words\",\"pa\":\"Q4-Words\"},\"elementTooltip\":{\"en\":\"Q4-Words\",\"hi\":\"Q4-Words\",\"mr\":\"Q4-Words\",\"gu\":\"Q4-Words\",\"bn\":\"Q4-Words\",\"as\":\"Q4-Words\",\"or\":\"Q4-Words\",\"te\":\"Q4-Words\",\"kn\":\"Q4-Words\",\"ta\":\"Q4-Words\",\"ur\":\"Q4-Words\",\"pa\":\"Q4-Words\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":100,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q5\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q5 -Sentences\",\"hi\":\"Q5 -Sentences\",\"mr\":\"Q5 -Sentences\",\"gu\":\"Q5 -Sentences\",\"bn\":\"Q5 -Sentences\",\"as\":\"Q5 -Sentences\",\"or\":\"Q5 -Sentences\",\"te\":\"Q5 -Sentences\",\"kn\":\"Q5 -Sentences\",\"ta\":\"Q5 -Sentences\",\"ur\":\"Q5 -Sentences\",\"pa\":\"Q5 -Sentences\"},\"elementTooltip\":{\"en\":\"Q5 -Sentences\",\"hi\":\"Q5 -Sentences\",\"mr\":\"Q5 -Sentences\",\"gu\":\"Q5 -Sentences\",\"bn\":\"Q5 -Sentences\",\"as\":\"Q5 -Sentences\",\"or\":\"Q5 -Sentences\",\"te\":\"Q5 -Sentences\",\"kn\":\"Q5 -Sentences\",\"ta\":\"Q5 -Sentences\",\"ur\":\"Q5 -Sentences\",\"pa\":\"Q5 -Sentences\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":101,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q6\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q6-Paragraph\",\"hi\":\"Q6-Paragraph\",\"mr\":\"Q6-Paragraph\",\"gu\":\"Q6-Paragraph\",\"bn\":\"Q6-Paragraph\",\"as\":\"Q6-Paragraph\",\"or\":\"Q6-Paragraph\",\"te\":\"Q6-Paragraph\",\"kn\":\"Q6-Paragraph\",\"ta\":\"Q6-Paragraph\",\"ur\":\"Q6-Paragraph\",\"pa\":\"Q6-Paragraph\"},\"elementTooltip\":{\"en\":\"Q6-Paragraph\",\"hi\":\"Q6-Paragraph\",\"mr\":\"Q6-Paragraph\",\"gu\":\"Q6-Paragraph\",\"bn\":\"Q6-Paragraph\",\"as\":\"Q6-Paragraph\",\"or\":\"Q6-Paragraph\",\"te\":\"Q6-Paragraph\",\"kn\":\"Q6-Paragraph\",\"ta\":\"Q6-Paragraph\",\"ur\":\"Q6-Paragraph\",\"pa\":\"Q6-Paragraph\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":102,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q7\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q7- Comprehension\",\"hi\":\"Q7- Comprehension\",\"mr\":\"Q7- Comprehension\",\"gu\":\"Q7- Comprehension\",\"bn\":\"Q7- Comprehension\",\"as\":\"Q7- Comprehension\",\"or\":\"Q7- Comprehension\",\"te\":\"Q7- Comprehension\",\"kn\":\"Q7- Comprehension\",\"ta\":\"Q7- Comprehension\",\"ur\":\"Q7- Comprehension\",\"pa\":\"Q7- Comprehension\"},\"elementTooltip\":{\"en\":\"Q7- Comprehension\",\"hi\":\"Q7- Comprehension\",\"mr\":\"Q7- Comprehension\",\"gu\":\"Q7- Comprehension\",\"bn\":\"Q7- Comprehension\",\"as\":\"Q7- Comprehension\",\"or\":\"Q7- Comprehension\",\"te\":\"Q7- Comprehension\",\"kn\":\"Q7- Comprehension\",\"ta\":\"Q7- Comprehension\",\"ur\":\"Q7- Comprehension\",\"pa\":\"Q7- Comprehension\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":103,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q8\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q8 -Commond words\",\"hi\":\"Q8 -Commond words\",\"mr\":\"Q8 -Commond words\",\"gu\":\"Q8 -Commond words\",\"bn\":\"Q8 -Commond words\",\"as\":\"Q8 -Commond words\",\"or\":\"Q8 -Commond words\",\"te\":\"Q8 -Commond words\",\"kn\":\"Q8 -Commond words\",\"ta\":\"Q8 -Commond words\",\"ur\":\"Q8 -Commond words\",\"pa\":\"Q8 -Commond words\"},\"elementTooltip\":{\"en\":\"Q8 -Commond words\",\"hi\":\"Q8 -Commond words\",\"mr\":\"Q8 -Commond words\",\"gu\":\"Q8 -Commond words\",\"bn\":\"Q8 -Commond words\",\"as\":\"Q8 -Commond words\",\"or\":\"Q8 -Commond words\",\"te\":\"Q8 -Commond words\",\"kn\":\"Q8 -Commond words\",\"ta\":\"Q8 -Commond words\",\"ur\":\"Q8 -Commond words\",\"pa\":\"Q8 -Commond words\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":104,\"element_type\":\"ElementText\",\"element_size\":2,\"database_param\":\"eo_q9\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"hi\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"mr\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"gu\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"bn\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"as\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"or\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"te\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"kn\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"ta\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"ur\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"pa\":\"Q- 9Can understand Wh- and h- questions and respond to it.\"},\"elementTooltip\":{\"en\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"hi\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"mr\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"gu\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"bn\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"as\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"or\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"te\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"kn\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"ta\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"ur\":\"Q- 9Can understand Wh- and h- questions and respond to it.\",\"pa\":\"Q- 9Can understand Wh- and h- questions and respond to it.\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":105,\"element_type\":\"ElementLabel\",\"element_size\":12,\"database_param\":\"life_skill\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"label\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Life Skill\",\"hi\":\"Life Skill\",\"mr\":\"Life Skill\",\"gu\":\"Life Skill\",\"bn\":\"Life Skill\",\"as\":\"Life Skill\",\"or\":\"Life Skill\",\"te\":\"Life Skill\",\"kn\":\"Life Skill\",\"ta\":\"Life Skill\",\"ur\":\"Life Skill\",\"pa\":\"Life Skill\"},\"elementTooltip\":{\"en\":\"Life Skill\",\"hi\":\"Life Skill\",\"mr\":\"Life Skill\",\"gu\":\"Life Skill\",\"bn\":\"Life Skill\",\"as\":\"Life Skill\",\"or\":\"Life Skill\",\"te\":\"Life Skill\",\"kn\":\"Life Skill\",\"ta\":\"Life Skill\",\"ur\":\"Life Skill\",\"pa\":\"Life Skill\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":106,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"life_skill_leadership\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"hi\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"mr\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"gu\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"bn\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"as\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"or\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"te\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"kn\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"ta\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"ur\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"pa\":\"Garding for life skill Leadership (Please fill A, B and C only)\"},\"elementTooltip\":{\"en\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"hi\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"mr\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"gu\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"bn\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"as\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"or\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"te\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"kn\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"ta\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"ur\":\"Garding for life skill Leadership (Please fill A, B and C only)\",\"pa\":\"Garding for life skill Leadership (Please fill A, B and C only)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":107,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"life_skill_collaboration\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"number\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"hi\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"mr\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"gu\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"bn\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"as\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"or\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"te\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"kn\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"ta\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"ur\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"pa\":\"Garding for life skills Collaboration (Please fill A, B and C only)\"},\"elementTooltip\":{\"en\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"hi\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"mr\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"gu\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"bn\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"as\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"or\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"te\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"kn\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"ta\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"ur\":\"Garding for life skills Collaboration (Please fill A, B and C only)\",\"pa\":\"Garding for life skills Collaboration (Please fill A, B and C only)\"},\"element_data\":{\"options\":[]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null},{\"element_id\":108,\"element_type\":\"ElementButton\",\"element_size\":12,\"database_param\":\"btn_save\",\"is_required\":\"false\",\"is_editable\":\"false\",\"input_type\":\"button\",\"min_val\":\"\",\"max_val\":\"\",\"elementLabel\":{\"en\":\"Save\",\"hi\":\"Save\",\"mr\":\"Save\",\"gu\":\"Save\",\"bn\":\"Save\",\"as\":\"Save\",\"or\":\"Save\",\"te\":\"Save\",\"kn\":\"Save\",\"ta\":\"Save\",\"ur\":\"Save\",\"pa\":\"Save\"},\"elementTooltip\":{\"en\":\"Save\",\"hi\":\"Save\",\"mr\":\"Save\",\"gu\":\"Save\",\"bn\":\"Save\",\"as\":\"Save\",\"or\":\"Save\",\"te\":\"Save\",\"kn\":\"Save\",\"ta\":\"Save\",\"ur\":\"Save\",\"pa\":\"Save\"},\"element_data\":{\"options\":[],\"submit-url\":\"https://tarlinsights.org/impact/api/child_test/\",\"method\":\"post\",\"parameters\":{\"action\":\"insert\"}},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_dependent\":false,\"expression\":null,\"is_visible\":null}]},{\"element_id\":\"2\",\"element_type\":\"table\",\"element_size\":12,\"element_data\":{\"element_title\":\"Child Assessment\",\"element_subtitle\":\"\",\"element_url\":\"http://tarlinsights.org/impact/api/child_profile/\",\"element_parameters\":{\"unit_id\":\"1\"},\"element_header\":[{\"param\":\"child_id\",\"label\":\"Child Code\"},{\"param\":\"child_name\",\"label\":\"Child Name\"},{\"param\":\"age\",\"label\":\"Age\"},{\"param\":\"gender\",\"label\":\"Class Enrolled\"},{\"param\":\"mother_name\",\"label\":\"Last LC level \"}]}}]}]");

/***/ }),

/***/ "d9oz":
/*!********************************************************!*\
  !*** ./src/app/custom-table/custom-table.component.ts ***!
  \********************************************************/
/*! exports provided: CustomTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTableComponent", function() { return CustomTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CustomTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](header_r2["label"]);
} }
function CustomTableComponent_tr_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomTableComponent_tr_13_ng_container_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.sendData(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const header_r5 = ctx.$implicit;
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3[header_r5["param"]]);
} }
function CustomTableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTableComponent_tr_13_ng_container_1_Template, 4, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tabularHeader);
} }
class CustomTableComponent {
    constructor(route, serverService) {
        this.route = route;
        this.serverService = serverService;
        this.form_id = '';
        this.sendFormData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unitData = {};
        this.tabularHeader = [];
        this.responseData = [];
        this.route.params.subscribe(event => {
            this.form_id = event.id;
        });
    }
    //action_header:any = {param: "del", label: "Action"}; 
    ngOnInit() {
        let url = this.tabularData.element_data['element_url'];
        let parameters = this.tabularData.element_data['element_parameters'];
        //this.tabularData.element_data['element_header'].push(this.action_header);
        this.tabularHeader = this.tabularData.element_data['element_header'];
        console.log(this.tabularHeader);
        this.unitData = this.formData;
        parameters['unit_id'] = this.unitData['unit_id'];
        console.log(parameters);
        this.serverService.fetchTabularData(url, parameters).then((response) => {
            console.log(response);
            this.responseData = response;
            $('#data_entry_data').DataTable().destroy();
            setTimeout(() => {
                $("#data_entry_data").DataTable({
                    destroy: true,
                    language: {
                        paginate: {
                            previous: "<i class='mdi mdi-chevron-left'>",
                            next: "<i class='mdi mdi-chevron-right'>"
                        }
                    },
                    drawCallback: function () {
                        $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                    }
                });
                $('#data_entry_data').DataTable().draw();
            }, 500);
        }).catch((err) => {
            console.log(err);
        });
        console.log('check reload : ', this.reloadTable);
    }
    isItemInfo(item) {
        let it = item.includes('_id');
        return it;
    }
    ngOnChanges(changes) {
        // console.log('value change',changes.reloadTable.currentValue);
        // if(changes.reloadTable.currentValue!=changes.reloadTable.previousValue){
        //   console.log("reload check");
        //   this.ngOnInit();
        // }
        //$('#example').DataTable()
    }
    sendData(child_data) {
        child_data['action'] = "update";
        console.log(child_data);
        this.sendFormData.emit(child_data);
    }
    url(url, parameters) {
        throw new Error('Method not implemented.');
    }
}
CustomTableComponent.ɵfac = function CustomTableComponent_Factory(t) { return new (t || CustomTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"])); };
CustomTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTableComponent, selectors: [["app-custom-table"]], inputs: { tabularData: "tabularData", formData: "formData", reloadTable: "reloadTable" }, outputs: { sendFormData: "sendFormData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 3, consts: [[1, "row"], [1, "col-lg-12"], [1, "card", "border"], [1, "card-body"], [1, "mb-3", "header-title"], [1, "col-md-12"], ["id", "data_entry_data", 1, "table", "dt-responsive", "nowrap"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 3, "click"]], template: function CustomTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomTableComponent_th_11_Template, 2, 1, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomTableComponent_tr_13_Template, 2, 1, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tabularData["element_data"].element_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabularHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.responseData["data"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tdGFibGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "f44V":
/*!******************************************************!*\
  !*** ./src/app/create-form/create-form.component.ts ***!
  \******************************************************/
/*! exports provided: CreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormComponent", function() { return CreateFormComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CreateFormComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Data Entry Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateFormComponent {
    constructor(spinner, _router, _service, route) {
        this.spinner = spinner;
        this._router = _router;
        this._service = _service;
        this.route = route;
        this.elements = [];
        this.ProgramData = [];
        this.Action_button = [];
        this.programName = '';
        this.route.params.subscribe(event => {
            this.programId = event.program_id;
            this.project = localStorage.getItem('project');
        });
    }
    onPopState(event) {
        setTimeout(() => {
            let history = localStorage.getItem('history');
            console.log(history);
            if (history == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    title: 'Logout',
                    text: 'Are you sure you want to logout?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Logout!',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.value) {
                        this.logout();
                    }
                    else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.DismissReason.cancel) {
                    }
                });
            }
            this._router.navigate([`unitlist`]);
            localStorage.setItem('history', '');
        }, 50);
    }
    ngOnInit() {
        $(".camp1").addClass('border border-primary');
        $(".camp2").attr("disabled", true);
        $(".camp3").attr("disabled", true);
        $(".camp4").attr("disabled", true);
        $(".con").attr("disabled", true);
        $(".endline").attr("disabled", true);
    }
    logout() {
        this._service.logout();
        this._router.navigate([`login`]);
    }
}
CreateFormComponent.ɵfac = function CreateFormComponent_Factory(t) { return new (t || CreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateFormComponent, selectors: [["app-create-form"]], hostBindings: function CreateFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("popstate", function CreateFormComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 89, vars: 2, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, "logo-box"], ["href", "index-2.html", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54"], [1, "list-unstyled", "topnav-menu", "float-right", "mb-0", 3, "ngModel"], [1, "dropdown", "notification-list"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "false", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "nav-user", "mr-0", "waves-effect", "waves-light", 2, "color", "#fabc09"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "fa-2x"], [1, "pro-user-name", "ml-1"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right", "profile-dropdown"], ["href", "/tracking", "class", "dropdown-item notify-item cursor-pointer", 4, "ngIf"], [1, "dropdown-item", "notify-item", "cursor-pointer", 3, "click"], [1, "fe-log-out"], [1, "content-page"], [1, "content"], [1, "row"], [1, "col-md-4"], [1, "card", "card-body"], ["method", "post", "id", "create_form"], [1, "col-md-12"], ["title", "", "data-rule-required", "true", "id", "component_type", "name", "component_type", 1, "form-control"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "type", "Text", "id", "element_id", "name", "element_id", "value", "", 1, "form-control"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "type", "Text", "id", "element_lebel", "name", "element_lebel", "value", "", 1, "form-control"], ["title", "", "data-rule-required", "true", "data-rule-digits", "true", "type", "Text", "id", "element_toottip", "name", "element_toottip", "value", "", 1, "form-control"], ["title", "", "data-rule-required", "true", "id", "is_required", "name", "is_required", 1, "form-control"], ["value", "true"], ["value", "false"], ["title", "", "data-rule-required", "true", "id", "element_size", "name", "element_size", 1, "form-control"], ["value", "6"], ["value", "8"], ["value", "12"], [1, "footer"], [1, "container-fluid"], [1, "col-md-6"], ["href", "#"], ["href", "/tracking", 1, "dropdown-item", "notify-item", "cursor-pointer"], [1, "fe-line-chart"]], template: function CreateFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModel", function CreateFormComponent_Template_ul_ngModel_6_listener() { return ctx.username; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CreateFormComponent_a_14_Template, 4, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateFormComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Element Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Text Box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Date Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Element Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Element Lebel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Element Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "is Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Element Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "1/4 Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "1/2 Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "3/4 Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Full Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "footer", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " 2023 \u00A9 Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Pratham");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_tracker == 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);\r\n    padding: 0 10px 0 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    height: 70px;\r\n    z-index: 100;\r\n    padding-left: 30px !important;\r\n    border-bottom: 3px solid #FFC000;\r\n    }\r\n\r\n    .footer_link[_ngcontent-%COMP%] {\r\n    color: #FFC000;\r\n    }\r\n\r\n    .wrimagecard[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n        margin-bottom: 1.5rem;\r\n        text-align: left;\r\n        position: relative;\r\n        background: #fff;\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        transition: all 0.3s ease;\r\n    }\r\n\r\n    .wrimagecard[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-size: 70px;\r\n    }\r\n\r\n    .wrimagecard-topimage_header[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    text-align: center;\r\n    background-color:rgba(250, 188, 9, 0.1);\r\n    color:#fabc09;\r\n    }\r\n\r\n    a.wrimagecard[_ngcontent-%COMP%]:hover, .wrimagecard-topimage[_ngcontent-%COMP%]:hover {\r\n        box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);\r\n    }\r\n\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n\r\n    .wrimagecard-topimage_title[_ngcontent-%COMP%] {\r\n        padding: 20px 24px;\r\n        height: 80px;\r\n        padding-bottom: 0.75rem;\r\n        position: relative;\r\n    }\r\n\r\n    .wrimagecard-topimage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        border-bottom: none;\r\n        text-decoration: none;\r\n        color: #525c65;\r\n        transition: color 0.3s ease;\r\n    }\r\n\r\n    .tablecard[_ngcontent-%COMP%]{\r\n        background: rgba(250, 188, 9, 0.1);\r\n        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);\r\n        border-radius: 4px;\r\n        margin-bottom: 50px;\r\n\r\n    }\r\n\r\n    .content-page[_ngcontent-%COMP%]{\r\n  margin-left: 0px !important;\r\n}\r\n\r\n    .footer[_ngcontent-%COMP%] {\r\n    position: absolute !important;\r\n    right: 0 !important;\r\n    left: 0px !important;\r\n}\r\n\r\n    .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: #98a6ad;\r\n    background-color: #323a46;\r\n    border-color: #424c5c;\r\n}\r\n\r\n    .cursor-pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBRXRCLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDOztJQUVBO0lBQ0EsY0FBYztJQUNkOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrREFBa0Q7UUFDbEQsa0JBQWtCO1FBQ2xCLHlCQUF5QjtJQUM3Qjs7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUNBO0lBQ0EsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiOztJQUNBO1FBQ0ksOENBQThDO0lBQ2xEOztJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO0lBQ2xCOztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCOztJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsMkJBQTJCO0lBQy9COztJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDLGtEQUFrRDtRQUNsRCxrQkFBa0I7UUFDbEIsbUJBQW1COztJQUV2Qjs7SUFHSjtFQUNFLDJCQUEyQjtBQUM3Qjs7SUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztJQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0lBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImNyZWF0ZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWN1c3RvbSB7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMzODQxNGE7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxNTQsMTYxLDE3MSwuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2JhKDE1NCwxNjEsMTcxLC4xNSk7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZGQzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyX2xpbmsge1xyXG4gICAgY29sb3I6ICNGRkMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLndyaW1hZ2VjYXJke1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTJweCAxNXB4IDIwcHggMHB4IHJnYmEoNDYsNjEsNzMsMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQgLmZhe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQtdG9waW1hZ2VfaGVhZGVye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTAsIDE4OCwgOSwgMC4xKTtcclxuICAgIGNvbG9yOiNmYWJjMDk7XHJcbiAgICB9XHJcbiAgICBhLndyaW1hZ2VjYXJkOmhvdmVyLCAud3JpbWFnZWNhcmQtdG9waW1hZ2U6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IDBweCByZ2JhKDQ2LDYxLDczLDAuMik7XHJcbiAgICB9XHJcbiAgICAud3JpbWFnZWNhcmQtdG9waW1hZ2UgYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLndyaW1hZ2VjYXJkLXRvcGltYWdlX3RpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC53cmltYWdlY2FyZC10b3BpbWFnZSBhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzUyNWM2NTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICAudGFibGVjYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxODgsIDksIDAuMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTJweCAxNXB4IDIwcHggMHB4IHJnYmEoNDYsNjEsNzMsMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbi5jb250ZW50LXBhZ2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUgLnRoZWFkLWRhcmsgdGgge1xyXG4gICAgY29sb3I6ICM5OGE2YWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzYTQ2O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDI0YzVjO1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "mdnv":
/*!**************************************************!*\
  !*** ./src/app/quiz/models/ChildDetailsModel.ts ***!
  \**************************************************/
/*! exports provided: ChildDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildDetailsModel", function() { return ChildDetailsModel; });
class ChildDetailsModel {
}


/***/ }),

/***/ "pC0V":
/*!****************************************************************!*\
  !*** ./src/app/child-data-entry/child-data-entry.component.ts ***!
  \****************************************************************/
/*! exports provided: ChildDataEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildDataEntryComponent", function() { return ChildDataEntryComponent; });
/* harmony import */ var _AP_ECE_GP_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../AP_ECE_GP.json */ "c5y2");
var _AP_ECE_GP_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../AP_ECE_GP.json */ "c5y2", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page/page.component */ "No3D");







function ChildDataEntryComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageData", page_r1)("formData", ctx_r0.form_data);
} }
class ChildDataEntryComponent {
    constructor(route, router, server) {
        this.route = route;
        this.router = router;
        this.server = server;
        this.data = [];
        this.form_id = 0;
        this.state = 0;
        this.local_key = "";
        this.assessment_cycle = 0;
        this.class = 0;
        this.child_id = 0;
        this.parameters = [];
        this.app_type = 1;
        this.lang = 'en';
        this.route.params.subscribe(event => {
            this.form_id = event.id;
            this.category_id = event.id;
            this.state = event.state;
            this.program_id = localStorage.getItem('history');
        });
        this.local_key = this.state + '/' + this.form_id;
        this.form_data = JSON.parse(localStorage.getItem(this.local_key));
    }
    ngOnInit() {
        setTimeout(() => {
            $(".form-control").keypress(function (event) {
                if (event.keyCode == 13) {
                    let textboxes = $("input.form-control");
                    let currentBoxNumber = textboxes.index(this);
                    if (textboxes[currentBoxNumber + 1] != null) {
                        let nextBox = textboxes[currentBoxNumber + 1];
                        nextBox.focus();
                        nextBox.select();
                        event.preventDefault();
                        return false;
                    }
                }
            });
        }, 1000);
        if (this.program_id != 115) {
            localStorage.setItem("lang", this.lang);
        }
        //this.project_id=localStorage.getItem('project');
        if (localStorage.getItem('project') == '2') {
            this.project_id = 1;
        }
        else {
            this.project_id = 2;
        }
        this.username = localStorage.getItem("name");
        this.is_tracker = localStorage.getItem("is_tracker");
        if (this.state == 1) {
            if (this.form_id == 1) {
                this.data = JSON.parse(JSON.stringify(_AP_ECE_GP_json__WEBPACK_IMPORTED_MODULE_0__));
                console.log(this.data);
                this.assessment_cycle = 1;
            }
        }
        else {
            console.log(this.program_id);
            this.server.getJson(this.app_type, this.project_id, this.program_id, this.category_id).then((res) => {
                console.log(res, this.state, this.program_id);
                console.log(this.state == this.program_id);
                if (res != "") {
                    if (this.state == this.program_id) {
                        if (this.form_id == this.category_id) {
                            this.data = JSON.parse(JSON.stringify(res));
                            this.assessment_cycle = 1;
                            this.url = this.data[0].get_url;
                            this.sendData();
                        }
                        setTimeout(() => {
                            $('.selectpicker').selectpicker('refresh');
                        }, 1500);
                    }
                }
            }).catch((err) => {
                //this.spinner.hide();
            });
        }
        this.sendData();
    }
    sendData() {
        let parameters = [];
        console.log(this.form_data);
        parameters['unit_id'] = this.form_data['unit_id'];
        parameters['assessment_cycle'] = this.assessment_cycle;
        parameters['class'] = this.class;
        parameters['child_id'] = this.child_id;
        parameters['action'] = 'get';
        this.server.fetchData(this.url, parameters).then((response) => {
            let elements = this.data[0]['childrens'][0]['childrens'];
            let data = response['data'][0];
            if (Object.keys(data).length > 0) {
                elements.forEach(element => {
                    if (element.element_type == "ElementText" || element.element_type == "ElementHidden" || element.element_type == "ElementTable" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementDropDown" || element.element_type == "ElementButton") {
                        // element.element_value = data[element['database_param']]
                        if (!this.form_data.hasOwnProperty(element.database_param)) {
                            this.form_data[element.database_param] = data[element['database_param']];
                        }
                        if (element.element_type == "ElementButton") {
                            //console.log(element.elementLabel.en);
                            element.elementLabel.en = "Update";
                            element.element_data.parameters = { "action": "update" };
                        }
                        else if (element.element_type == "ElementTable") {
                            element['childrens'].forEach(el => {
                                //console.log(el);
                                el['childrens'].forEach(e => {
                                    if (!this.form_data.hasOwnProperty(e.database_param)) {
                                        $('#' + e.element_id).val(data[e['database_param']]);
                                    }
                                });
                            });
                        }
                    }
                });
            }
            // console.log(elements);
        }).catch((err) => {
            console.log(err);
        });
    }
    logout() {
        this.server.logout();
        this.router.navigate([`login`]);
    }
    changeLanguage(key) {
        this.lang = key;
        localStorage.setItem('lang', this.lang);
        location.reload();
    }
}
ChildDataEntryComponent.ɵfac = function ChildDataEntryComponent_Factory(t) { return new (t || ChildDataEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"])); };
ChildDataEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChildDataEntryComponent, selectors: [["app-child-data-entry"]], decls: 69, vars: 2, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, "float-left"], ["href", "index-2.html", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/iimpact.jpg", "alt", "", "height", "54"], [1, "list-unstyled", "topnav-menu", "float-right", "mb-0", 3, "ngModel"], [1, "dropdown", "notification-list"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "false", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "nav-user", "mr-0", "waves-effect", "waves-light"], [1, "rounded-circle", "text-danger", "font-weight-bold"], ["aria-hidden", "true", 1, "fa", "fa-language"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right", "profile-dropdown"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "click"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "false", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "nav-user", "mr-0", "waves-effect", "waves-light", 2, "color", "#fabc09"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "fa-2x"], [1, "pro-user-name", "ml-1"], [1, "dropdown-item", "notify-item", "cursor-pointer", 3, "click"], [1, "fe-log-out"], [1, "content", "mt-5", "mb-5"], [1, "container-fluid"], [1, "row"], [1, "col-12"], ["class", "page-title-box", 4, "ngFor", "ngForOf"], [1, "footer", 2, "left", "0px"], [1, "col-md-6"], ["href", "https://www.pratham.org/", 1, "footer_link"], [1, "page-title-box"], [3, "pageData", "formData"]], template: function ChildDataEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModel", function ChildDataEntryComponent_Template_ul_ngModel_6_listener() { return ctx.username; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_13_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_16_listener() { return ctx.changeLanguage("hin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Hindi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_19_listener() { return ctx.changeLanguage("as"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Assamese");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_22_listener() { return ctx.changeLanguage("bn"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Bengali");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_25_listener() { return ctx.changeLanguage("gu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Gujarati");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_28_listener() { return ctx.changeLanguage("kn"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Kannada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_31_listener() { return ctx.changeLanguage("mr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Marathi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_34_listener() { return ctx.changeLanguage("or"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Odia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_37_listener() { return ctx.changeLanguage("pa"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Punjabi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_40_listener() { return ctx.changeLanguage("ta"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Tamil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_43_listener() { return ctx.changeLanguage("te"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Telugu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChildDataEntryComponent_Template_a_click_53_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ChildDataEntryComponent_div_61_Template, 2, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "footer", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " 2020 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "pratham.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #fff;\r\n  box-shadow: 0 0 35px 0 rgba(154,161,171,.15);\r\n  padding: 0 10px 0 0;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  height: 70px;\r\n  z-index: 100;\r\n  padding-left: 30px !important;\r\n  border-bottom: 3px solid #FFC000;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLWRhdGEtZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBRXRCLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDIiwiZmlsZSI6ImNoaWxkLWRhdGEtZW50cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2YmFyLWN1c3RvbSB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MTRhOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxNTQsMTYxLDE3MSwuMTUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxNTQsMTYxLDE3MSwuMTUpO1xyXG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZGQzAwMDtcclxuICB9XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "r/Tl":
/*!****************************************************!*\
  !*** ./src/app/admin/preview/preview.component.ts ***!
  \****************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/server.service */ "NjuS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../page/page.component */ "No3D");







function PreviewComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
} }
function PreviewComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} }
function PreviewComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data Entry Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PreviewComponent_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const program_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", program_r7.ProgramId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](program_r7.program);
} }
function PreviewComponent_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categorys_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", categorys_r8.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categorys_r8.category_name);
} }
function PreviewComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageData", page_r9)("formData", ctx_r5.form_data);
} }
function PreviewComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_div_85_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.GetExcel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Download Parameters File");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PreviewComponent {
    constructor(spinner, route, router, server) {
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.server = server;
        this.app_type = 1;
        this.project_id = 1;
        //file:any="C:\Vikas\Angular_Project\DynamicDataEntryPortal\parameters_pc.xls";
        this.file = null;
        this.data = [];
        this.form_id = 0;
        this.state = 'ECE -AP';
        this.local_key = "";
        this.assessment_cycle = 0;
        this.class = 0;
        this.isParametrsShow = false;
        this.route.params.subscribe(event => {
            this.form_id = 1;
            this.state = 'ECE -AP';
            this.program_id = localStorage.getItem('history');
        });
        this.local_key = this.state + '/' + this.form_id;
        this.form_data = JSON.parse(localStorage.getItem(this.local_key));
    }
    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
        }, 500);
        this.username = localStorage.getItem("name");
        this.is_tracker = localStorage.getItem("is_tracker");
        //this.get_Program();
    }
    get_Program() {
        this.project_id = $('#project').val();
        if ((this.project_id == 1) || (this.project_id == 2)) {
            //url = ''
            this.server.fetchProgramGP(this.project_id).then((res) => {
                console.log(res);
                this.programs = res['program'];
                //console.log(this.programs);
                setTimeout(() => {
                    $('.selectpicker').selectpicker('refresh');
                }, 500);
            }).catch((err) => {
            });
        }
        else {
            this.server.fetchProgram().then((res) => {
                console.log(res);
                this.programs = res['results'];
                //console.log(this.category);
                setTimeout(() => {
                    $('.selectpicker').selectpicker('refresh');
                }, 500);
            }).catch((err) => {
            });
        }
    }
    selectProgram(event) {
        this.program_id = event.target.value;
        //console.log(event.target.value);
        this.category = this.programs.filter((prg) => prg.ProgramId == this.program_id)[0]['categories'];
        //console.log(this.category);
        setTimeout(() => {
            $('#category').selectpicker('refresh');
        }, 500);
        //console.log(this.category);
    }
    selectCategory(event) {
        this.category_id = event.target.value;
        this.get_json();
    }
    submit_CSV() {
        this.spinner.show();
        this.server.submitCSV(this.app_type, this.project_id, this.file, this.program_id, this.category_id).then((res) => {
            console.log(res);
            if (res != "") {
                if (this.state == 'ECE -AP') {
                    if (this.form_id == 1) {
                        this.data = JSON.parse(JSON.stringify(res));
                        this.JsonToSave = JSON.stringify(res);
                        this.assessment_cycle = 1;
                        console.log(this.data);
                        ;
                        //this.class = 6;
                        //this.url = 'https://testgp.prathamapps.com/3.0/index.php/pre_primary_portal/get_childwise_assessment';
                        this.spinner.hide();
                        $("#btn_publish").removeClass("d-none");
                    }
                    //this.data = JSON.parse(JSON.stringify(res));
                    //this.districtArr = res['data'];
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 500);
                }
            }
        }).catch((err) => {
            this.spinner.hide();
            $("#btn_publish").addClass("d-none");
        });
    }
    get_json() {
        this.spinner.show();
        this.server.getJson(this.app_type, this.project_id, this.program_id, this.category_id).then((res) => {
            console.log(res);
            if (res != "") {
                if (this.state == 'ECE -AP') {
                    if (this.form_id == 1) {
                        this.data = JSON.parse(JSON.stringify(res));
                        this.assessment_cycle = 1;
                        console.log(this.data);
                        this.spinner.hide();
                        this.isParametrsShow = true;
                    }
                    //this.data = JSON.parse(JSON.stringify(res));
                    //this.districtArr = res['data'];
                    setTimeout(() => {
                        $('.selectpicker').selectpicker('refresh');
                    }, 500);
                }
            }
        }).catch((err) => {
            this.spinner.hide();
        });
    }
    Publish_json() {
        this.spinner.show();
        this.server.saveJson(this.app_type, this.project_id, this.JsonToSave, this.program_id, this.category_id).then((res) => {
            console.log(res);
            alert("Saved Successfully");
        }).catch((err) => {
            this.spinner.hide();
        });
    }
    GetExcel() {
        this.spinner.show();
        this.server.getExcel(this.app_type, this.project_id, this.program_id, this.category_id).then((res) => {
            console.log(res);
            // const blob = new Blob([res as BlobPart], {
            //   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            // });
            // const a = document.createElement('a');
            // const url = window.URL.createObjectURL(blob);
            // a.href = url;
            // a.download = "result_"+new Date()+".xlsx";
            // a.click();
            const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            //window.open(url);
            const a = document.createElement('a');
            a.href = url;
            a.download = "Parameters_" + new Date() + ".xlsx";
            a.click();
            this.spinner.hide();
        }).catch((err) => {
            this.spinner.hide();
        });
    }
    onProjectSelect(event) {
        this.project_id = event.target.value;
        this.get_Program();
    }
    onAppTypeSelect(event) {
        this.app_type = event.target.value;
    }
    // On file Select
    onFileSelect(event) {
        this.file = event.target.files[0];
        console.log(this.file);
    }
    logout() {
        this.server.logout();
        this.router.navigate([`login`]);
    }
    validateCondition(row) {
        let condition = row.dependant;
        let operators = row.dependent_operator;
        let operators_result = row.dependent_result;
        if (condition == "less than equal") {
            let total = $('#' + operators_result).val();
            console.log(total);
            if (operators != undefined) {
                let otherTotal = 0;
                let dependentID = operators.split(',');
                dependentID.forEach(ele => {
                    let value = $('#' + ele).val();
                    if (value != '' && !isNaN(value)) {
                        otherTotal += parseInt(value);
                    }
                });
                if (otherTotal != total) {
                    this.errorToastr("Allocation Mismatch. Total should be " + total);
                    this.errorHighlight(dependentID[0]);
                    dependentID.forEach(ele => {
                        this.errorHighlight(ele);
                    });
                    this.error = true;
                    //$('#'+dependentID[0]).scrollintoview({ duration: 1000});
                    setTimeout(function () {
                        $('#' + dependentID[0]).focus();
                    });
                }
            }
        }
    }
    validateBlankField(row) {
        console.log($('#' + row.element_id).val());
        if ($('#' + row.element_id).val() == "" || $('#' + row.element_id).val() == null) {
            //$('#'+row.element_id).scrollintoview({ duration: 1000});
            setTimeout(function () {
                $('#' + row.element_id).focus();
            });
            this.errorToastr("Field cannot be blank ");
            this.errorHighlight(row.element_id);
            this.error = true;
        }
    }
    errorToastr(txt = "Oh Snap !!!", heading = "Error", bgColor = "blue", txtColor = "#eee", textAlignment = "right", pos = "top-right", icon = "error") {
        $.toast({
            heading: "<strong>" + heading + "</strong>",
            text: txt,
            showHideTransition: 'slide',
            bgColor: '#bf441d',
            textColor: '#eee',
            allowToastClose: false,
            hideAfter: 5000,
            stack: 5,
            textAlign: 'left',
            position: 'top-right',
            icon: 'error',
            loaderBg: '#fff'
        });
    }
    errorHighlight(id) {
        $('#' + id).removeClass('form-control-focus').addClass('highlight');
        $('#' + id).parent().parent().addClass('highlight');
    }
    removeErrorHighlight() {
        $('.highlight').addClass('form-control-focus').removeClass('highlight');
    }
    finalSubmitData() {
        this.error = false;
        console.log(this.data);
        this.data.childrens.forEach(sectionData => {
            sectionData.childrens.forEach(element => {
                if (this.error == false) {
                    if (element.element_type == "ElementText" || element.element_type == "ElementDate" || element.element_type == "ElementDateRange" || element.element_type == "ElementHidden" || element.element_type == "ElementDropDown") {
                        if (this.error == false) {
                            this.validateBlankField(element);
                        }
                        if (this.error == false) {
                            this.validateCondition(element);
                        }
                    }
                }
                // if(element.element_type=="ElementText" || element.element_type=="ElementDate" || element.element_type=="ElementDateRange" || element.element_type=="ElementHidden" || element.element_type=="ElementDropDown"){
                //   if((element.element_value=='' || element.element_value==undefined) && element.is_required=="true"){
                //     console.log(element);
                //     //this.errorHighlight(element.element_id);
                //     this.validateBlankField(element);
                //     this.validateCondition(element);
                //     //validate = true;
                //   }
                // }
            });
        });
    }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"])); };
PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], decls: 93, vars: 8, consts: [["id", "wrapper"], [1, "navbar-custom"], [1, "float-left"], ["href", "index-2.html", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54", 4, "ngIf"], ["src", "assets/images/image2.jpeg", "alt", "", "height", "54", 4, "ngIf"], [1, "list-unstyled", "topnav-menu", "float-right", "mb-0", 3, "ngModel"], [1, "dropdown", "notification-list"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "false", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "nav-user", "mr-0", "waves-effect", "waves-light", 2, "color", "#fabc09"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "fa-2x"], [1, "pro-user-name", "ml-1"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right", "profile-dropdown"], ["href", "/tracking", "class", "dropdown-item notify-item cursor-pointer", 4, "ngIf"], [1, "dropdown-item", "notify-item", "cursor-pointer", 3, "click"], [1, "fe-log-out"], [1, "content", "mt-5"], [1, "container-fluid"], [1, "row"], [1, "card", "card-body"], [1, "col-lg-2", "col-md-4", "col-xs-12"], [1, "form-group", "mb-3"], ["for", "simpleinput"], ["id", "project", "data-style", "btn-outline-primary", 1, "selectpicker", "show-tick", 3, "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["id", "device", "data-style", "btn-outline-primary", 1, "selectpicker", "show-tick", 3, "change"], ["disabled", "true"], ["id", "program", "data-style", "btn-outline-primary", 1, "selectpicker", "show-tick", 3, "change"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "category", "data-style", "btn-outline-primary", 1, "selectpicker", "show-tick", 3, "change"], [1, "mb-3"], ["type", "file", "id", "customFile", 1, "form-control", 3, "change"], [1, "col-lg-1", "col-md-4", "col-xs-12"], ["type", "button", "id", "addViewChild", 1, "btn", "btn-primary", "ladda-button", "glow-button", "btn-block", 3, "click"], ["id", "btn_publish", 1, "col-lg-1", "col-md-4", "col-xs-12", "d-none"], ["type", "button", "id", "addViewChild", 1, "btn", "btn-primary", "ladda-button", "glow-button", "btn-block", "btn-success", 3, "click"], [1, "col-12"], ["class", "page-title-box", 4, "ngFor", "ngForOf"], ["class", " col-lg-1 col-md-4 col-xs-12", 4, "ngIf"], [1, "footer", 2, "left", "0px"], [1, "col-md-6"], ["href", "https://www.pratham.org/", 1, "footer_link"], ["src", "assets/images/pratham-logo.svg", "alt", "", "height", "54"], ["src", "assets/images/image2.jpeg", "alt", "", "height", "54"], ["href", "/tracking", 1, "dropdown-item", "notify-item", "cursor-pointer"], [1, "fe-line-chart"], [3, "value"], [1, "page-title-box"], [3, "pageData", "formData"], ["aria-hidden", "true", 1, "fa", "fa-download"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreviewComponent_img_5_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreviewComponent_img_6_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function PreviewComponent_Template_ul_ngModel_7_listener() { return ctx.username; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PreviewComponent_a_15_Template, 4, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_Template_a_click_16_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PreviewComponent_Template_select_change_29_listener($event) { return ctx.onProjectSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "GP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "PC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "device Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PreviewComponent_Template_select_change_44_listener($event) { return ctx.onAppTypeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Device Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Program Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PreviewComponent_Template_select_change_55_listener($event) { return ctx.selectProgram($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Select Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, PreviewComponent_option_58_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Category Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PreviewComponent_Template_select_change_63_listener($event) { return ctx.selectCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PreviewComponent_option_66_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Upload Excel file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PreviewComponent_Template_input_change_71_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_Template_button_click_74_listener() { return ctx.submit_CSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_Template_button_click_78_listener() { return ctx.Publish_json(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, PreviewComponent_div_83_Template, 2, 2, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, PreviewComponent_div_85_Template, 5, 0, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "footer", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " 2022 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "pratham.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.program_id != 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.program_id == 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_tracker == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isParametrsShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"]], styles: [".navbar-custom[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);\r\n    padding: 0 10px 0 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    height: 70px;\r\n    z-index: 100;\r\n    padding-left: 30px !important;\r\n    border-bottom: 3px solid #FFC000;\r\n  }\r\n\r\n\r\n  .custom-file[_ngcontent-%COMP%] {\r\n    align-content:center;\r\n  }\r\n\r\n\r\n  .filters[_ngcontent-%COMP%]{\r\n    margin: 50px;\r\n  }\r\n\r\n\r\n  .mt-5[_ngcontent-%COMP%]{\r\n    margin-top: 100px !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFFdEIsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7OztFQUdBO0lBQ0Usb0JBQW9CO0VBQ3RCOzs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUIiLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jdXN0b20ge1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MTRhOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMzVweCAwIHJnYmEoMTU0LDE2MSwxNzEsLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxNTQsMTYxLDE3MSwuMTUpO1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNGRkMwMDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmN1c3RvbS1maWxlIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gIH1cclxuICAuZmlsdGVyc3tcclxuICAgIG1hcmdpbjogNTBweDtcclxuICB9XHJcblxyXG4gIC5tdC01e1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "roMS":
/*!**************************************!*\
  !*** ./quiz-child-registration.json ***!
  \**************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"element_type\":\"page\",\"element_data\":{},\"element_id\":1,\"childrens\":[{\"element_id\":\"2\",\"element_type\":\"table\",\"element_size\":12,\"element_data\":{\"element_title\":\"Child Profile\",\"element_subtitle\":\"\",\"element_url\":\"https://testgp.prathamapps.com/3.0/index.php/pre_primary_portal/get_child_admission\",\"element_parameters\":{\"unit_id\":\"1\"},\"element_header\":[{\"param\":\"child_name\",\"label\":\"Child Name\"},{\"param\":\"age\",\"label\":\"Age\"},{\"param\":\"gender\",\"label\":\"Gender\"},{\"param\":\"mobile_number\",\"label\":\"Phone Number\"},{\"param\":\"present_status\",\"label\":\"Action\"}]}},{\"element_id\":0,\"element_type\":\"section\",\"element_size\":12,\"element_data\":{\"element_title\":\"Child Registration\",\"element_subtitle\":\"\"},\"childrens\":[{\"element_type\":\"ElementHidden\",\"element_id\":\"StateId\",\"elementTooltip\":{\"en\":\"State\",\"hin\":\"\"},\"elementLabel\":{\"en\":\"\",\"hin\":\"\"},\"element_size\":4,\"database_param\":\"state_id\",\"is_dependent\":\"false\",\"input_type\":\"text\",\"is_required\":\"false\",\"is_multiple\":\"false\"},{\"element_type\":\"ElementHidden\",\"element_id\":\"DistrictId\",\"elementTooltip\":{\"en\":\"\",\"hin\":\"\"},\"elementLabel\":{\"en\":\"District Name\",\"hin\":\"ज़िले का नाम\"},\"element_size\":4,\"database_param\":\"district_id\",\"is_dependent\":\"false\",\"input_type\":\"text\",\"is_required\":\"false\",\"is_multiple\":\"false\"},{\"element_type\":\"ElementHidden\",\"element_id\":\"BlockId\",\"elementTooltip\":{\"en\":\"State\",\"hin\":\"\"},\"elementLabel\":{\"en\":\"Block Name\",\"hin\":\"शिक्षा खंड का नाम\"},\"element_size\":4,\"database_param\":\"block_id\",\"is_dependent\":\"false\",\"input_type\":\"text\",\"is_required\":\"false\",\"is_multiple\":\"false\"},{\"element_type\":\"ElementHidden\",\"element_id\":\"UnitId\",\"elementTooltip\":{\"en\":\"\",\"hin\":\"\"},\"elementLabel\":{\"en\":\"\",\"hin\":\"\"},\"element_size\":4,\"database_param\":\"unit_id\",\"is_dependent\":\"false\",\"input_type\":\"text\",\"is_required\":\"false\",\"is_multiple\":\"false\"},{\"element_id\":\"PrathamDistrictName\",\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"district_name\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"District Name\"},\"elementTooltip\":{\"en\":\"District Name\"},\"element_data\":{\"data_url\":\"\",\"data_paramters\":{}},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_editable\":\"false\"},{\"element_id\":\"PrathamBlockName\",\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"block_name\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"Block Name\"},\"elementTooltip\":{\"en\":\"Block Name\"},\"element_data\":{\"data_url\":\"\",\"data_paramters\":{}},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_editable\":\"false\"},{\"element_id\":12,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"village_name\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"Village Name\"},\"elementTooltip\":{\"en\":\"Village Name\"},\"element_data\":{},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_editable\":\"false\"},{\"element_id\":3,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"unit_name\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"School Name (with DISE Code)\"},\"elementTooltip\":{\"en\":\"School Name (with DISE Code)\"},\"element_data\":{\"data_url\":\"\",\"data_paramters\":{}},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\",\"is_editable\":\"false\"},{\"element_id\":4,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"child_name\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"Child Name\"},\"elementTooltip\":{\"en\":\"Child Name\"},\"element_data\":{},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":5,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"admission_number\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"Child Unique No\"},\"elementTooltip\":{\"en\":\"Child Unique No\"},\"element_data\":{},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":6,\"element_type\":\"ElementDropDown\",\"element_size\":4,\"database_param\":\"age\",\"is_required\":\"true\",\"input_type\":\"dropdown\",\"elementLabel\":{\"en\":\"Child Age\"},\"elementTooltip\":{\"en\":\"Child Age\"},\"element_data\":{\"options\":[{\"option_id\":1,\"option_name\":\"Age 3+\"},{\"option_id\":2,\"option_name\":\"Age 4+\"}]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":7,\"element_type\":\"ElementDropDown\",\"element_size\":4,\"database_param\":\"gender\",\"is_required\":\"true\",\"input_type\":\"dropdown\",\"elementLabel\":{\"en\":\"Child Gender\"},\"elementTooltip\":{\"en\":\"Child Gender\"},\"element_data\":{\"options\":[{\"option_id\":1,\"option_name\":\"Boys\"},{\"option_id\":2,\"option_name\":\"Girls\"},{\"option_id\":3,\"option_name\":\"Other\"}]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":8,\"element_type\":\"ElementDropDown\",\"element_size\":4,\"database_param\":\"class\",\"is_required\":\"true\",\"input_type\":\"dropdown\",\"elementLabel\":{\"en\":\"Child Class\"},\"elementTooltip\":{\"en\":\"Child Class\"},\"element_data\":{\"options\":[{\"option_id\":1,\"option_name\":\"Nursary\"},{\"option_id\":2,\"option_name\":\"K.G.\"}]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":9,\"element_type\":\"ElementDropDown\",\"element_size\":4,\"database_param\":\"last_status\",\"is_required\":\"true\",\"input_type\":\"dropdown\",\"elementLabel\":{\"en\":\"Last Year Child Enrollment\"},\"elementTooltip\":{\"en\":\"Last Year Child Enrollment\"},\"element_data\":{\"options\":[{\"option_id\":1,\"option_name\":\"Aanganwadi\"},{\"option_id\":2,\"option_name\":\"Govt Pre School (Nursary)\"},{\"option_id\":3,\"option_name\":\"Pvt. School\"},{\"option_id\":4,\"option_name\":\"No where\"}]},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":10,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"mother_name\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"Child Mother Name\"},\"elementTooltip\":{\"en\":\"Child Mother Name\"},\"element_data\":{},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":11,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"father_name\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"Child Father Name\"},\"elementTooltip\":{\"en\":\"Child Father Name\"},\"element_data\":{},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_id\":13,\"element_type\":\"ElementText\",\"element_size\":4,\"database_param\":\"mobile_number\",\"is_required\":\"true\",\"input_type\":\"text\",\"elementLabel\":{\"en\":\"Mobile No\"},\"elementTooltip\":{\"en\":\"Mobile No\"},\"element_data\":{},\"operation\":\"\",\"operator\":\"\",\"operator_result\":\"\",\"dependant\":\"\",\"dependent_operator\":\"\",\"dependent_result\":\"\"},{\"element_type\":\"ElementButton\",\"element_id\":\"submit_button\",\"elementLabel\":{\"en\":\"Submit\",\"hin\":\"\"},\"element_size\":12,\"is_editable\":\"false\",\"element_data\":{\"submit-url\":\"https://testgp.prathamapps.com/3.0/index.php/pre_primary_portal/child_admission\",\"parameters\":{\"action\":\"insert\"}}}]}]}]");

/***/ }),

/***/ "uTPM":
/*!*************************************!*\
  !*** ./src/app/TooltipDirective.ts ***!
  \*************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "eBEy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TooltipDirective {
    constructor(el, ref) {
        this.ref = ref;
        this.options = {};
        this.title = '';
        this._el = el.nativeElement;
        this._host = el.nativeElement;
    }
    ngOnInit() {
        let commonOption = { 'arrow': true, "inertia": true, "animation": "perspective" };
        let contentTitle = { content: this.title };
        this.options = Object.assign(commonOption, this.options, contentTitle);
        //this.detectHostNode();
        // if (this.options.hasOwnProperty("html")) {
        //   const template = document.getElementById(this.options['html'])
        //   delete this.options['html']
        //   this.options['content'] = template.innerHTML;
        //   this.instance = tippy(this._el,
        //     this.options
        //   )
        // }
        // else {
        //   this.instance = tippy(this._el,
        //     this.options
        //   )
        // }
    }
    ngOnChanges() {
        let commonOption = { 'arrow': true, "inertia": true, "animation": "perspective" };
        let contentTitle = { content: this.title };
        this.options = Object.assign(commonOption, this.options, contentTitle);
        this.detectHostNode();
        if (this.options.hasOwnProperty("dynamic")) {
            delete this.options['dynamic'];
            // this._el.addEventListener('mouseover', function () {
            //   tippy(this, { content: this.title })
            //   this._tippy.setContent("tttt")
            // });
        }
        else if (this.options.hasOwnProperty("html")) {
            const template = document.getElementById(this.options['html']);
            delete this.options['html'];
            this.options['content'] = template.innerHTML;
            this.instance = Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._el, this.options);
        }
        else {
            this.instance = Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._el, this.options);
        }
    }
    // Re-create the tooltip on changes
    // Detects if the directive is placed on an angular component
    // host node. The tooltip will not display correctly, so
    // instead we will transfer all data-attributes and title to the first
    // child of the component.
    detectHostNode() {
        const attrs = this._el.attributes;
        let hostNode = false;
        for (let i = 0; i < attrs.length; i++) {
            if (attrs[i].name.indexOf('_nghost') > -1) {
                hostNode = true;
            }
        }
        if (hostNode && this._el.children.length > 0) {
            this._el = this._el.children[0];
            this.xferAttributes(this._host, this._el);
        }
    }
    // If we are transfering the tooltip from the host component
    // node to the first child node, we'll need to copy all the data attributes
    xferAttributes(fromEl, toEl) {
        const daList = [
            'position',
            'trigger',
            'interactive',
            'interactiveborder',
            'delay',
            'animation',
            'arrow',
            'arrowsize',
            'animatefill',
            'duration',
            'html',
            'size',
            'distance',
            'theme',
            'offset',
            'hideonclick',
            'multiple',
            'followcursor',
            'inertia',
            'flipduration',
            'sticky',
            'stickyduration',
            'appendto',
            'zindex',
            'touchhold',
            'performance',
            'dynamictitle',
            'popperoptions'
        ];
        // Copy data attributes from the input element to the target element
        daList.forEach(da => {
            if (fromEl.dataset[da]) {
                toEl.dataset[da] = fromEl.dataset[da];
            }
        });
        if (fromEl.hasAttribute('title')) {
            toEl.title = fromEl.title;
            fromEl.title = '';
        }
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "appTooltip", ""]], inputs: { options: "options", title: "title" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _child_data_entry_child_data_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child-data-entry/child-data-entry.component */ "pC0V");
/* harmony import */ var _file_not_found404_file_not_found404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-not-found404/file-not-found404.component */ "6CW9");
/* harmony import */ var _summary_sheet_summary_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary-sheet/summary-sheet.component */ "ZjjC");
/* harmony import */ var _unitlist_unitlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unitlist/unitlist.component */ "bX9t");
/* harmony import */ var _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracking/tracking.component */ "+hgv");
/* harmony import */ var _create_form_create_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-form/create-form.component */ "f44V");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _hp_login_hp_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hp-login/hp-login.component */ "YpB4");
/* harmony import */ var _quiz_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ././quiz/quiz/quiz.component */ "Jhzt");
/* harmony import */ var _admin_preview_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/preview/preview.component */ "r/Tl");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attendance/attendance.component */ "JBRV");
/* harmony import */ var _login_direct_login_direct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-direct/login-direct.component */ "8r4/");
/* harmony import */ var _login_iimpact_login_iimpact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-iimpact/login-iimpact.component */ "Rz0q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    {
        path: "admin",
        component: _admin_preview_preview_component__WEBPACK_IMPORTED_MODULE_10__["PreviewComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: "data-entry/:state/:id",
        component: _child_data_entry_child_data_entry_component__WEBPACK_IMPORTED_MODULE_1__["ChildDataEntryComponent"],
    },
    {
        path: "attendance-data-entry/:state/:id",
        component: _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_11__["AttendanceComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: "summary-sheet",
        component: _summary_sheet_summary_sheet_component__WEBPACK_IMPORTED_MODULE_3__["SummarySheetComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: "admin_create",
        component: _create_form_create_form_component__WEBPACK_IMPORTED_MODULE_6__["CreateFormComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: "",
        component: _login_iimpact_login_iimpact_component__WEBPACK_IMPORTED_MODULE_13__["LoginIimpactComponent"],
    },
    {
        path: "login",
        component: _login_iimpact_login_iimpact_component__WEBPACK_IMPORTED_MODULE_13__["LoginIimpactComponent"],
    },
    {
        path: "unitlist",
        component: _unitlist_unitlist_component__WEBPACK_IMPORTED_MODULE_4__["UnitlistComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: "tracking",
        component: _tracking_tracking_component__WEBPACK_IMPORTED_MODULE_5__["TrackingComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: "hp/login",
        component: _hp_login_hp_login_component__WEBPACK_IMPORTED_MODULE_8__["HpLoginComponent"]
    },
    {
        path: "direct/login",
        component: _login_direct_login_direct_component__WEBPACK_IMPORTED_MODULE_12__["LoginDirectComponent"]
    },
    {
        path: "quiz/:lang/:form_id",
        component: _quiz_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_9__["QuizComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        component: _file_not_found404_file_not_found404_component__WEBPACK_IMPORTED_MODULE_2__["FileNotFound404Component"]
    }
];
// const routes: Routes = [
//   { path: "login", component: LoginComponent },
//   {
//     path: "",
//     component: UnitlistComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: "unitlist",
//         component: UnitlistComponent,
//       },
//       {
//         path: "data-entry/:id",
//         component: ChildDataEntryComponent,
//       }
//     ],
//   },
// ];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/server.service */ "NjuS");






class LoginComponent {
    constructor(formBuilder, route, router, ServerService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.ServerService = ServerService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            project: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = '/unitlist';
        $(".selectpicker").selectpicker('refresh');
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.ServerService.login(this.f.email.value, this.f.password.value, this.f.project.value).then((data) => {
            console.log(this.f.project.value);
            if (data['status'] != 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Incorrect email or password!'
                });
            }
            else {
                const program = JSON.stringify(data['program']);
                localStorage.setItem('currentUser', data['user_details'].email);
                localStorage.setItem('BlockId', data['user_details'].BlockId);
                localStorage.setItem('userId', data['user_details'].userId);
                localStorage.setItem('name', data['user_details'].name);
                localStorage.setItem('roleId', data['user_details'].roleId);
                localStorage.setItem('is_tracker', data['program'][0]['is_tracker']);
                localStorage.setItem('Program', program);
                localStorage.setItem('project', this.f.project.value);
                if (data['user_details'].roleId == 2) {
                    this.router.navigate([`admin`]);
                }
                else {
                    this.router.navigate([this.returnUrl]);
                }
            }
        }).catch((err) => {
            console.log(err);
            this.error = err;
            this.loading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 1, consts: [[1, "account-pages", "mt-5", "mb-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "bg-pattern"], [1, "card-body", "p-4"], [1, "text-center", "w-75", "m-auto"], ["routerLink", "/login"], ["src", "assets/images/Pratham Full Logo - Black.png", "alt", "", "height", "62", 1, "prathamLogoHeightWidth"], [1, "text-muted", "mb-4", "mt-3"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], ["for", "project"], ["data-live-search", "true", "formControlName", "project", 1, "selectpicker"], ["value", "1", "selected", "selected", 2, "white-space", "initial"], ["value", "2", 2, "white-space", "initial"], ["for", "emailaddress"], ["formControlName", "email", "type", "text", "id", "emailaddress", "required", "", "placeholder", "Enter User Id", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "required", "", "id", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkbox-signin", "checked", "", 1, "custom-control-input"], ["for", "checkbox-signin", 1, "custom-control-label"], [1, "form-group", "mb-0", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Pratham Direct");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Government Partnership");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Email/User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vxva":
/*!**********************************************!*\
  !*** ./src/app/quiz/models/QuestionModel.ts ***!
  \**********************************************/
/*! exports provided: QuestionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModel", function() { return QuestionModel; });
class QuestionModel {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zeCW":
/*!***********************************************!*\
  !*** ./src/app/quiz/models/ChildInfoModel.ts ***!
  \***********************************************/
/*! exports provided: ChildInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildInfoModel", function() { return ChildInfoModel; });
class ChildInfoModel {
    constructor() {
        this.type_of_quiz_taker = "";
        this.is_server = false;
    }
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map