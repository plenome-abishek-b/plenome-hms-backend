const express = require("express");
const bodyParser = require("body-parser");

//create the express app

const app = express();
const cors = require("cors");
const forever = require("forever");

//setup the server port

const port = process.env.PORT || 4000;

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());
app.use(cors());

//define the root route

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
};

// Use forever to automatically restart the server if it crashes or encounters an error
forever.startServer(startServer);

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  forever.stopAll();
  process.exit(1);
});

// Handle unhandled rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
  forever.stopAll();
  process.exit(1);
});

//import patient routes

const leave_type_route = require("./src/routes/leave_type.route");
const DepartmentRoute = require("./src/routes/department.route");
// const patientVisitRoutes = require('./src/routes/outpatient.visits.route');
// const patientChargesRoutes = require('./src/routes/outpatient.charges.route');
// const patientTimelineRoutes = require('./src/routes/outpatient.timeline.route');
// const outPatientChargesRoutes = require('./src/routes/outpatient.patientcharges.route');
// const patientMedicationRoutes = require('./src/routes/outpatient.medication.route');
// const patientOperationRoutes = require('./src/routes/outpatient.operation.route');
// const patientOperationsRoutes = require('./src/routes/outpatient.operations.route');
// const outPatientPaymentRoutes = require('./src/routes/outpatient.payment.route');
// const outPatientLabInvestigationRoutes = require('./src/routes/outpatient.lab_investigation.route');
// const outPatientTreatmentHistoryRoutes = require('./src/routes/outpatient.treatment_history.route');
const outPatientLiveConsultationRoutes = require("./src/routes/outpatient.live_consultation.route");
const outPatientOpdDetailsRoutes = require("./src/routes/outpatient.opd_details.route");
const outPatientDischargeCardRoutes = require("./src/routes/outpatient.discharge_card.route");

//import frontoffice routes

const frontOfficeVisitorsBookRoutes = require("./src/routes/frontoffice.visitors_book.route");
const frontOfficeCallLogRoutes = require("./src/routes/frontoffice.general_calllog.route");
const frontOfficeRecievedPostalRoutes = require("./src/routes/frontoffice.recievedpostal.route");
const frontOfficeDispatchPostalRoutes = require("./src/routes/frontoffice.dispatchpostal.route");
const frontOfficeComplaintRoutes = require("./src/routes/frontoffice.complaint.route");

//appointment routes
const appointmentAddRoutes = require("./src/routes/appointment.route");
const addPatientRoutes = require("./src/routes/patients.route");

const roleBaseRoutes = require("./src/routes/rolebased.route");

//IPD routes
const medicationRoute = require("./src/routes/medication.route");
const operationRoute = require("./src/routes/operation.route");
const chargeRoute = require("./src/routes/charge.route");
const timelinneRouter = require("./src/routes/timeline.route");
const bed_history_route = require("./src/routes/bed_history.route");
const treatment_history_router = require("./src/routes/treatment_history.route");
const lab_investigation_router = require("./src/routes/lab_investigation.route");
const ipd_details_route = require("./src/routes/ipd_details.route");
const consultant_register_route = require("./src/routes/consultant_register.route");
const nurse_note_route = require("./src/routes/nurse_note.route");
const bloodbankRoute = require("./src/routes/bloodbank.route");
// const consultant_doctor = require('./src/routes/consultant.route');

//Pharmacy routes

const PatientRoute = require("./src/routes/pharmacyPatient.route");
const PurchaseRoute = require("./src/routes/pharmacyPurchase.route");
const MedicineRoute = require("./src/routes/pharmacyMedicine.route");
const MedicineSupplierRoute = require("./src/routes/medicineSupplier.route");
const PharmacyPurchaseDetailRoute = require("./src/routes/pharmacyPurchaseDetails.route");
const CSVRoute = require("./src/routes/csvImport.route");
const billBasicRoute = require("./src/routes/pharmacyBillBasic.route");
const pharmacyTransaction = require("./src/routes/pharmacyTransactions.route");
const pharmacyBillDetails = require("./src/routes/pharmacyBillDetails.route");
const medicineCategory = require("./src/routes/medicineCategory.route");
const medicineName = require("./src/routes/medicineName.route");
const BatchDetailsRoute = require("./src/routes/batchNo.route");

//Pathology Routes
const generate_pathology_billRoute = require("./src/routes/generate_pathology_bill.route");
const list_pathology_testRoute = require("./src/routes/list_pathology_test.route");
const newpatientRoute = require("./src/routes/new_patient.route");
const list_pathology_bill_testRoute = require("./src/routes/pathology_bill.route");
const pathology_report = require("./src/routes/pathology_report_route");
const pathology_transactionRoute = require("./src/routes/pathology_transaction.route");
const Patient_Route = require("./src/routes/patient.route");
const prescriptionRoute = require("./src/routes/search_by_prescription.route");
// const appointmentshiftRoute = require('./src/routes/shift.appointment.route');

const user_by_roles = require("./src/routes/user_by_roles.route");

const PatientQueueSlotRoute = require("./src/routes/patientQueueSlot.route");
const appointmentshiftRoute = require("./src/routes/appointmentshift.route");

// Setup Charges
const UnitTypeRoute = require("./src/routes/unitType.route");
const TaxCategoryRoute = require("./src/routes/taxCategory.route");
const ChargeTypeRoute = require("./src/routes/chargeType.router");
const chargeTypeModuleRoute = require("./src/routes/chargeTypeModule");
const ChargeCategoryRoute = require("./src/routes/chargeCategory.route");
const ChargesRoute = require("./src/routes/setupcharge.route");
const Charge_typeRoute = require("./src/routes/charge_type.route");
const Charge_categoryRoute = require("./src/routes/charge_category.route");
const Charge_nameRoute = require("./src/routes/charge_name.route");
const DosageDurationRoute = require("./src/routes/dosageDuration.route");
const DosageIntervalRoute = require("./src/routes/dosageInterval.route");
const MedicineCategoryRoute = require("./src/routes/medicine_Category.route");
const MedicineSupplier = require("./src/routes/medicine_Supplier.route");
const MedicineDosageRoute = require("./src/routes/medicineDosage.route");

//opdprofile

const patientVisitRoutes = require("./src/routes/outpatient.visits.route");
const patientTimelineRoutes = require("./src/routes/outpatient.timeline.route");
const outPatientChargesRoutes = require("./src/routes/outpatient.patientcharges.route");
const patientMedicationRoutes = require("./src/routes/outpatient.medication.route");
const patientOperationsRoutes = require("./src/routes/outpatient.operations.route");
const outPatientPaymentRoutes = require("./src/routes/outpatient.payment.route");
const consultant_doctor = require("./src/routes/consultant.route");
const OpdDosage = require("./src/routes/dosage.route");
const OpdMedicineCategory = require("./src/routes/medicineCategory.route");
const OpdMedicineName = require("./src/routes/medicineName.route");
const OpdOperationCategory = require("./src/routes/operationCategory.route");
const OpdOperationName = require("./src/routes/operationName.route");
const chargeCategory = require("./src/routes/charge_category.route");
const chargeName = require("./src/routes/charge_name.route");
const ipdChargeName = require("./src/routes/charge_name.route");
const chargeType = require("./src/routes/charge_type.route");
const labInvest = require("./src/routes/outpatient.lab_invest.route");
const treatmentHistory = require("./src/routes/outpatient.treatment_his.route");

const discharged_patient_route = require("./src/routes/dischargePatient.route");

// ipd profile routes

const nurse_by_roles = require("./src/routes/user_by_nurse.route");
const ipd_user_by_roles = require("./src/routes/user_by_roles.route");
const SpecialistRoute = require("./src/routes/specialist.route");
const ipd_medicationRoute = require("./src/routes/medication.route");
const ipd_operationRoute = require("./src/routes/operation.route");
const ipd_chargeRoute = require("./src/routes/charge.route");
const ipd_consultant_register_route = require("./src/routes/consultant_register.route");
const ipd_paymentRouter = require("./src/routes/payments.route");
const ipd_timelinneRouter = require("./src/routes/timeline.route");
const ipd_bed_history_route = require("./src/routes/bed_history.route");
const ipd_treatment_history_router = require("./src/routes/treatment_history.route");
const ipd_lab_investigation_router = require("./src/routes/lab_investigation.route");
const ipd_VisitorsPurposeRoute = require("./src/routes/visitors_purpose.route");
const radiologys = require("./src/routes/radiology_route");
const pathologys = require("./src/routes/pathology.route");
const findingCategory = require("./src/routes/findingCategory.route");
const findings = require("./src/routes/finding.route");

const PrescriptionBasicRouter = require("./src/routes/prescriptionBasic.route");
const prescriptionRouter = require("./src/routes/prescription.route");
const prescriptionDetailsRoute = require("./src/routes/prescriptionDetails.route");
const prescriptionBasic = require("./src/routes/prescriptionBasic.route");
const prescriptionDetails = require("./src/routes/prescriptionDetails.route");
const prescriptionTest = require("./src/routes/prescriptionTest.route");

const operationCategory = require("./src/routes/operationCategory.route");
const operationName = require("./src/routes/operationName.route");
const ipd_patientdetails = require("./src/routes/ipd_details1.route");
const radio_category_name = require("./src/routes/radio_category_name.route");
const Ipddischarged_report = require("./src/routes/IpddischargedReport.route");
const Add_staff = require("./src/routes/staff.route");
const Designation = require("./src/routes/staff_designation.route");
const CaseReferenceRoute = require("./src/routes/caseRef.route");
const postChargetype = require("./src/routes/chargeType.router");

//Ambulance
const ambulanceCallReport = require("./src/routes/ambulanceCallReport.route");
const ambulanceCollectedBy = require("./src/routes/AmbulanceCollecedBy.route");
const ambulanceVehicleModel = require("./src/routes/AmbulanceVehicleModel.route");
// const radio_category_name = require('./src/routes/radio_category_name.route')
const test_parameter_name = require("./src/routes/radio_test_parametername.router");
const radiology_details = require("./src/routes/list_radiology_test.route");
const radiology_bill = require("./src/routes/radiology_bill.route");
const radiology_report = require("./src/routes/radiologyReport.route");
const radilogy_transaction = require("./src/routes/radiologyTransaction.route");
const radio_category = require("./src/routes/radio_category.route");
const radio_parameter = require("./src/routes/radiology_parameter.route");
const radio_unit = require("./src/routes/unit_radiology.route");
const Radiology_prescriptionRoute = require("./src/routes/search_by_prescription_radiology.route");
const setupInventoryCategory = require("./src/routes/inventory_item_category.route");
const setupInventorySupplier = require("./src/routes/inventory_item_supplier.route");
const setupInventoryStore = require("./src/routes/inventory_item_store.route");
const appointmentReport = require("./src/routes/appointmentReport.route");
const appointmetnPriority = require("./src/routes/appointmentPriority.route");
const appointmentShifts = require("./src/routes/appointmentshift.route");
const symptoms = require("./src/routes/symptoms.route");
const ipd_discharged_report = require("./src/routes/dischargedReport.route");
const opdReport = require("./src/routes/opdReport.route");
const findings_report = require("./src/routes/findings.route");
const opdDischargedReport = require("./src/routes/opdDischargedReport.route");
const pharamacyBillingReport = require("./src/routes/pharmacyBillReport.route");
const opdBalancedReport = require("./src/routes/opdBalanceReport.route");
const ipdBalancedReport = require("./src/routes/ipdBalanceReport.route");
const ipdReport = require("./src/routes/ipdReport.route");
const slot_AppointmentSetupDoctor = require("./src/routes/slot_doctor.route");
const slot_AppointmentShift = require("./src/routes/slot_shift.route");
const slotAppointmentConsultation = require("./src/routes/slot_consultation.route");
const slotSearch = require("./src/routes/slot_post.route");
const slotAppointmentsetupCharges = require("./src/routes/slot_charges.route");
const slotAppointmentchargecategory = require("./src/routes/slot_charge_category.route");
const Appointmetn_setup_doctor_shift = require("./src/routes/appointment_doctor_shift.route");
const financeIncomehead = require("./src/routes/finance_income_head.route");
const finance_expense_head = require("./src/routes/finance_expense_head.route");
const financeIncomeMainmodule = require("./src/routes/finance_income.route");
const financeExpenseMainmodule = require("./src/routes/finance_expenses.route");
const Appointment_setup_shift = require("./src/routes/appointment_Shift.route");
const Frontoffice_purpose = require("./src/routes/visitors_purpose.route");
const Frontoffice_source = require("./src/routes/source.route");
const Frontoffice_complaintype = require("./src/routes/complainType.route");
const Frontofficesetup_priority = require("./src/routes/priority.route");

const BedFloorSetup = require("./src/routes/bedFloor.route");
const BedGroupSetup = require("./src/routes/bedGroup.route");
const BedTypeSetup = require("./src/routes/bedType.route");
const BedListSetup = require("./src/routes/bedList.route");
const BedStatusSetup = require("./src/routes/bedStatus.route");

// Pathology api route

const pathologyTest = require("./src/routes/pathology.test.route");
const pathologyBill = require("./src/routes/pathology.bill.route");
const generatePathologyBill = require("./src/routes/generate_pathology_bill.route");
const pathologyCategoryName = require("./src/routes/category_name.route");
const pathologyChargeCategory = require("./src/routes/pathology_charge_category.route");
const pathologyChargeName = require("./src/routes/pathology_charge_name.route");
const pathologyTestParameterName = require("./src/routes/test_parameter_name.route");
const pathologyTestName = require("./src/routes/test_name.route");
const pathologyReport = require("./src/routes/pathology_report.route");
const pathologyTransaction = require("./src/routes/pathology_transaction.route");
const pathologySearchByPrescription = require("./src/routes/search_by_prescription.route");

// Pathology setup api route

const pathoCategory = require("./src/routes/patho_category.route");
const pathoParameter = require("./src/routes/pathology_parameter.route");
const pathoUnit = require("./src/routes/unit.route");
// Inventory api route

const inventoryItem = require("./src/routes/item.route");
const inventoryItemCategory = require("./src/routes/inventory_item_category.route");
const inventoryItemStock = require("./src/routes/list_item_stock.route");
const inventoryItemSupplier = require("./src/routes/inventory_item_supplier.route");
const inventoryItemStore = require("./src/routes/inventory_item_store.route");
const inventoryIssueItem = require("./src/routes/issue_item.route");
const inventoryItemIssueTo = require("./src/routes/inventory_issue_to.route");
const inventoryItemUserType = require("./src/routes/inventory_user_type.route");
const SymptomHeadSetup = require("./src/routes/symptomHead.route");
const SymptomTypeSetup = require("./src/routes/symptomsType.route");
// const frontOfficeRecievedPostalRoutes = require('./src/routes/frontoffice.recievedpostal.route');
// const frontOfficeDispatchPostalRoutes = require('./src/routes/frontoffice.dispatchpostal.route');
// const symptoms = require('./src/routes/symptoms.route')

const General_setting = require("./src/routes/sch.route");
const Sms_setting = require("./src/routes/sms_settings.route");
const Payment_setting = require("./src/routes/payment_methods.route");
const Role_setting = require("./src/routes/rolespermission.route");
const Role_setup_setting = require("./src/routes/roles.route");
const Email_setting = require("./src/routes/emailSettings.route");
const User_patient_setting = require("./src/routes/userPatientSettings.route");
const User_staff_setting = require("./src/routes/userStaffSettings.route");
const Prefix_setting = require("./src/routes/PrefixSetting.route");

const Patientlogin_report = require("./src/routes/patientLoginCredentials.route");
const Birth_report = require("./src/routes/birthReport.route");
const Death_report = require("./src/routes/deathReport.route");
const Income_report = require("./src/routes/incomeReport.route");
const Expense_report = require("./src/routes/expensesReport.route");
const Income_head_report = require("./src/routes/incomeHead.route");
const Expense_head_report = require("./src/routes/expensesHead.route");
const Inventory_issue_report = require("./src/routes/inventoryIssueReport.route");
const Inventory_item_report = require("./src/routes/inventoryItemReport.route");
const Inventory_stock_report = require("./src/routes/inventoryStockReport.route");
const Transaction_report = require("./src/routes/transactionReport.routes");
const Daily_transaction_report = require("./src/routes/daily_transaction.route");
const Collected_by = require("./src/routes/AmbulanceCollecedBy.route");
const Audit_trail = require("./src/routes/audit_trial_report.route");
const Pharmacy_bill_report = require("./src/routes/pharmacyBillReport.route");
const Tpa_report = require("./src/routes/tpaReport.route");
const payroll_report = require("./src/routes/payrollReport.route");
const Patient_bill_report = require("./src/routes/patient_bill_report.route");
const Radiology_report = require("./src/routes/radiologyPatientReport.route");
const Radiology_name = require("./src/routes/radiologyName.route");
const RadiologyCategory = require("./src/routes/radiologyCategory.route");
const PathologyName = require("./src/routes/pathologyName.route");
const PathologyCategory = require("./src/routes/pathologyCategory.route");
const PathologyPatientReport = require("./src/routes/pathologyPatientReport.route");
const Certificate = require("./src/routes/certificate.route");
const staff_attendance_report = require("./src/routes/staff_attendance.route");
const pathology_patient_report = require("./src/routes/pathologyPatientReport.route");
const pathology_category_report = require("./src/routes/pathologyCategory.route");
const pathology_name_report = require("./src/routes/pathologyName.route");
const ambulanceCall_report = require("./src/routes/ambulanceCallReport.route");
const ambulanceCollectedBy_report = require("./src/routes/AmbulanceCollecedBy.route");
const ambulanceVehicalModel_report = require("./src/routes/AmbulanceVehicleModel.route");
const Blood_Issue_report = require("./src/routes/bloodIssueReport.route");
const Blood_Donor_report = require("./src/routes/bloodDonorReport.route");
const Blood_Donor = require("./src/routes/DonorDetails.route");
const OT_report = require("./src/routes/OTReport.route");
const Component_issue_report = require("./src/routes/componentIssueReport.route");
const Component_report = require("./src/routes/Bcomponent.route");
const referral_report = require("./src/routes/referral_report.route");
const payee_report = require("./src/routes/payee.route");
const patientType_report = require("./src/routes/patientType.route");
const TPAManagement_report = require("./src/routes/TPAManagement.route");
const TPA_report = require("./src/routes/tpaReport.route");
const Patient_visit_report = require("./src/routes/patient_visit_report.route");
const Birth_record = require("./src/routes/birthrecord.route");
const Death_record = require("./src/routes/deathrecord.route");
const download_center = require("./src/routes/downloadCenter.route");
// const referral_report = require('./src/routes/referral_report.route')
const referral_payments = require("./src/routes/referralpayment.route");
const referral_person = require("./src/routes/referralperson.route");
const referral_category = require("./src/routes/referralCategory.route");

const Certificate_overview = require("./src/routes/certificate_overview.route");
const Certificate_template = require("./src/routes/certificate.route");
const Setup_Blood_Bank = require("./src/routes/bloodbank.route");
const opdDetails = require("./src/routes/outpatientDetails.route");

//ambulance

const Ambulancecall = require("./src/routes/ambulance.route");
const AmbulancecallPost = require("./src/routes/ambulancecallpost.route");
const Ambulancelist = require("./src/routes/ambulancelist.route");

const billingRadiology = require("./src/routes/radiology.route");
const transactionBill = require("./src/routes/Transaction.route");
const billingBloodIssue = require("./src/routes/bloodissue.route");
const billingRadiologyReport = require("./src/routes/radiologyReport.route");
const billingAppointmentShiftReport = require("./src/routes/appointmentshift.route");
const billingPatientSlotReport = require("./src/routes/patientQueueSlot.route");
const billingBloodIssueBag = require("./src/routes/bloodissuebagbilling.route");
const bloodComponentIssue = require("./src/routes/bloodComponentIssue.route");
// const pathologyBill = require('./src/routes/pathology.bill.route');
// const generatePathologyBill = require('./src/routes/generate_pathology_bill.route');

//Dashboard
const StaffCountRoute = require("./src/routes/staffCount.route");

const GraphRoute = require("./src/routes/graph.route");

const DashCalcRoute = require("./src/routes/dashCalc.router");

// app.use('/api/pathology/bill',pathologyBill)
// app.use('/api/pathology/generateBill',generatePathologyBill)
app.use("/api/staffCount", StaffCountRoute);
app.use("/api/graph", GraphRoute);
app.use("/api/dashCalc", DashCalcRoute);

app.use("/api/billing/radiology", billingRadiology);
app.use("/api/billing/bloodIssue", billingBloodIssue);
app.use("/api/billing/radiologyReport", billingRadiologyReport);
app.use("/api/appointmentShift", billingAppointmentShiftReport);
app.use("/api/patienQueueSlot", billingPatientSlotReport);
app.use("/api/billing/bloodissue/bag", billingBloodIssueBag);
app.use("/api/billing/transaction", transactionBill);
app.use("/api/billing/bloodComponentIssue", bloodComponentIssue);

app.use("/api/ambulanceCall", Ambulancecall);
app.use("/api/ambulanceCallPost", AmbulancecallPost);
app.use("/api/ambulanceList", Ambulancelist);

app.use("/api/opd/details", opdDetails);

app.use("/api/caseReference", CaseReferenceRoute);
app.use("/api/payrollreport", payroll_report);
app.use("/api/ipdreport", ipdReport);
app.use("/api/audittrailreport", Audit_trail);
app.use("/api/pharmacybillreport", Pharmacy_bill_report);
app.use("/api/certificateoverview", Certificate_overview);
app.use("/api/certificatetemplate", Certificate_template);
app.use("/api/setup_bloodbank", Setup_Blood_Bank);
//create patient routes

app.use("/api/leaveTypes", leave_type_route);
app.use("/api/departments", DepartmentRoute);
// app.use('/api/outpatient/visits',patientVisitRoutes);
// app.use('/api/outpatient/charges',patientChargesRoutes);
// app.use('/api/outpatient/timeline',patientTimelineRoutes);
// app.use('/api/outpatient/patientcharges',outPatientChargesRoutes);
// app.use('/api/outpatient/medication',patientMedicationRoutes);
// app.use('/api/outpatient/operation',patientOperationRoutes);
// app.use('/api/outpatient/operations',patientOperationsRoutes);
// app.use('/api/outpatient/payment',outPatientPaymentRoutes);
// app.use('/api/outpatient/lab_investigation',outPatientLabInvestigationRoutes);
// app.use('/api/outpatient/treatment_history',outPatientTreatmentHistoryRoutes);
app.use("/api/outpatient/live_consultation", outPatientLiveConsultationRoutes);
app.use("/api/outpatient/opd_details", outPatientOpdDetailsRoutes);
app.use("/api/outpatient/discharge_card", outPatientDischargeCardRoutes);

// create frontoffice routes

app.use("/api/frontoffice/visitors_book", frontOfficeVisitorsBookRoutes);
app.use("/api/frontoffice/call_log", frontOfficeCallLogRoutes);
app.use("/api/frontoffice/recieved_postal", frontOfficeRecievedPostalRoutes);
app.use("/api/frontoffice/dispatch_postal", frontOfficeDispatchPostalRoutes);
app.use("/api/frontoffice/complaint", frontOfficeComplaintRoutes);

// appointment routes
app.use("/api/appointment/add_appointment", appointmentAddRoutes);
app.use("/api/appointment/add_patient", addPatientRoutes);

//IPD Routes
app.use("/api/medication", medicationRoute);
app.use("/api/operation", operationRoute);
app.use("/api/charge", chargeRoute);
app.use("/api/consultant_register", consultant_register_route);
app.use("/api/timeline", timelinneRouter);
app.use("/api/bedHistory", bed_history_route);
app.use("/api/ipd_details", ipd_details_route);
app.use("/api/treatmentHistory", treatment_history_router);
app.use("/api/labinvestigation", lab_investigation_router);
app.use("/api/nursenote", nurse_note_route);
app.use("/api/chargeName", ipdChargeName);

//records
app.use("/api/birthrecord", Birth_record);
app.use("/api/deathrecord", Death_record);
//role based

app.use("/api/rolebased", roleBaseRoutes);

const authRoutes = require("./src/routes/auth.route");

app.use(express.json());
app.use("/api/authlogin", authRoutes);

app.use("/api/bloodbank_products", bloodbankRoute);

//consultant

app.use("/api/nurse_Roles", consultant_doctor);

//pharmacy
app.use("/api/batchNo", BatchDetailsRoute);
app.use("/api/patient", PatientRoute);
app.use("/api/pharmacyPurchase", PurchaseRoute);
app.use("/api/medicineSupplier", MedicineSupplierRoute);
app.use("/api/purchaseMedicineDetails", PharmacyPurchaseDetailRoute);
app.use("/api/csvImport", CSVRoute);
app.use("/api/pharmacyBasicBill", billBasicRoute);
app.use("/api/pharmacyTransaction", pharmacyTransaction);
app.use("/api/pharmacyBillDetails", pharmacyBillDetails);
app.use("/api/medicineCategory", medicineCategory);
app.use("/api/medicineName", medicineName);
app.use("/api/pharmacyMedicine", MedicineRoute);
app.use("/api/generate_pathology_bill", generate_pathology_billRoute);
app.use("/api/list_pathology_test", list_pathology_testRoute);
app.use("/api/newpatient", newpatientRoute);
app.use("/api/list_pathologybilltest", list_pathology_bill_testRoute);
app.use("/api/pathology_report", pathology_report);
app.use("/api/pathology_transaction", pathology_transactionRoute);
app.use("/api/patient", PatientRoute);
app.use("/api/prescription", prescriptionRoute);
app.use("/api/appointmentShift", appointmentshiftRoute);
app.use("/api/user_Roles", user_by_roles);
app.use("/api/patienQueueSlot", PatientQueueSlotRoute);

app.use("/api/appointmentShift", appointmentshiftRoute);
app.use("/api/unitType", UnitTypeRoute);
app.use("/api/taxCategory", TaxCategoryRoute);
// app.use('/api/chargeType',ChargeTypeRoute)
app.use("/api/chargeTypeModule", chargeTypeModuleRoute);
app.use("/api/chargeCategory", ChargeCategoryRoute);

app.use("/api/setupcharge", ChargesRoute);
app.use("/api/chargetype", postChargetype);
app.use("/api/charge_category", Charge_categoryRoute);
app.use("/api/charge_name", Charge_nameRoute);
const chargeRoutes = require("./src/routes/charge.route");
app.use("/api/charge", chargeRoutes);
//setup Pharmacy
app.use("/api/dosageDuration", DosageDurationRoute);
app.use("/api/dosageInterval", DosageIntervalRoute);
app.use("/api/medicine_Category", MedicineCategoryRoute);
app.use("/api/medicine_Supplier", MedicineSupplier);
app.use("/api/medicineDosage", MedicineDosageRoute);

//opdprofile

app.use("/api/outpatient/visits", patientVisitRoutes);
app.use("/api/outpatient/timeline", patientTimelineRoutes);
app.use("/api/outpatient/patientcharges", outPatientChargesRoutes);
app.use("/api/outpatient/medication", patientMedicationRoutes);
app.use("/api/outpatient/operations", patientOperationsRoutes);
app.use("/api/outpatient/payment", outPatientPaymentRoutes);
app.use("/api/nurse_Roles", consultant_doctor);
app.use("/api/outpatient/dosage", OpdDosage);
app.use("/api/outpatient/medicineCategory", OpdMedicineCategory);
app.use("/api/outpatient/medicineName", OpdMedicineName);
app.use("/api/outpatient/operationCategory", OpdOperationCategory);
app.use("/api/outpatient/operationName", OpdOperationName);
app.use("/api/outpatient/chargeCategory", chargeCategory);
app.use("/api/outpatient/chargeName", chargeName);
app.use("/api/outpatient/chargeType", chargeType);
app.use("/api/outpatient/labInvest", labInvest);
app.use("/api/outpatient/treatmentHistory", treatmentHistory);

//discharge_patient
app.use("/api/dischargedPatient", discharged_patient_route);

//ipd profile routes

app.use("/api/nurse_Roles", nurse_by_roles);
app.use("/api/user_Roles", ipd_user_by_roles);
app.use("/api/specialist", SpecialistRoute);
app.use("/api/medication", ipd_medicationRoute);
app.use("/api/operation", ipd_operationRoute);
app.use("/api/charge", ipd_chargeRoute);
app.use("/api/consultant_register", ipd_consultant_register_route);
app.use("/api/payments", ipd_paymentRouter);
app.use("/api/timeline", ipd_timelinneRouter);
app.use("/api/bedHistory", ipd_bed_history_route);
app.use("/api/treatmentHistory", ipd_treatment_history_router);
app.use("/api/labinvestigation", ipd_lab_investigation_router);
app.use("/api/visitorPurpose", ipd_VisitorsPurposeRoute);

app.use("/api/radiologys", radiologys);
app.use("/api/pathology", pathologys);
app.use("/api/findingCategory", findingCategory);
app.use("/api/findings", findings);
app.use("/api/prescriptionBasic", PrescriptionBasicRouter);
app.use("/api/prescription", prescriptionRouter);
app.use("/api/prescriptionDetails", prescriptionDetailsRoute);
app.use("/api/prescriptionBasic", prescriptionBasic);
app.use("/api/prescripationDetails", prescriptionDetails);
app.use("/api/prescriptionTest", prescriptionTest);
app.use("/api/operationCategory", operationCategory);
app.use("/api/operationName", operationName);
app.use("/api/ipd_patientdetails", ipd_patientdetails);

//Reports
app.use("/api/ipdDischargedReport", Ipddischarged_report);

//Add staff
app.use("/api/addstaff", Add_staff);
app.use("/api/designation", Designation);

//ambulance
app.use("/api/ambulancecallreport", ambulanceCallReport);
app.use("/api/ambulancecollectedby", ambulanceCollectedBy);
app.use("/api/ambulanceVehiclemodel", ambulanceVehicleModel);

//Radiology

app.use("/api/radiologys", radiologys);
app.use("/api/radio_category_name", radio_category_name);
app.use("/api/radio_test_parameter_name", test_parameter_name);
app.use("/api/radiology_details", radiology_details);
app.use("/api/search_by_prescriptionno", Radiology_prescriptionRoute);
app.use("/api/radiologyBilling", radiology_bill);
app.use("/api/radiologyReport", radiology_report);
app.use("/api/radiologyTransactions", radilogy_transaction);
app.use("/api/radiologyCategory", radio_category);
app.use("/api/radiology_parameter", radio_parameter);
app.use("/api/radiologyunit", radio_unit);

//Inventory
app.use("/api/setup_inventory_category", setupInventoryCategory);
app.use("/api/setupinventory_store", setupInventoryStore);
app.use("/api/setupInventory_supplier", setupInventorySupplier);

//symptoms
app.use("/api/symptoms", symptoms);

//Setup Appointment
app.use("/api/appointment_report", appointmentReport);
app.use("/api/appointment_priority", appointmetnPriority);
app.use("/api/appointment_shift", appointmentShifts);

app.use("/api/findings_report", findings_report);
app.use("/api/opdReport", opdReport);
app.use("/api/opdDischargedReport", opdDischargedReport);
app.use("/api/dischargedReport", ipd_discharged_report);
app.use("/api/pharmacybillreport", pharamacyBillingReport);
app.use("/api/opdbalancedreport", opdBalancedReport);
app.use("/api/ipdbalancedreport", ipdBalancedReport);

app.use("/api/financeicomehead", financeIncomehead);
app.use("/api/financeexpensehead", finance_expense_head);
app.use("/api/financeMainmoduleIncome", financeIncomeMainmodule);
app.use("/api/financeMainmoduleExpenses", financeExpenseMainmodule);
app.use(
  "/api/appointmentsetupslotchargecategory",
  slotAppointmentchargecategory
);
app.use("/appointmentsetupslotcharges", slotAppointmentsetupCharges);
app.use("/api/appointmentsetupdoctor", slot_AppointmentSetupDoctor);
app.use("/api/appointmentsetupshift", slot_AppointmentShift);
app.use("/api/appointmentsetupConsultation", slotAppointmentConsultation);
app.use("/api/appointmentsetupsearch", slotSearch);
app.use("/api/appointmentsetupdoctorshift", Appointmetn_setup_doctor_shift);
app.use("/api/appointmentsetupshift", Appointment_setup_shift);
// app.use('/api/symptoms',symptoms)

//setup Frontoffice
app.use("/api/frontofficesetup/purpose", Frontoffice_purpose);
app.use("/api/frontofficesetup/source", Frontoffice_source);
app.use("/api/frontofficesetup/complaintype", Frontoffice_complaintype);
app.use("/api/frontofficesetup/priority", Frontofficesetup_priority);
app.use("/api/frontoffice/recieved_postal", frontOfficeRecievedPostalRoutes);
app.use("/api/frontoffice/dispatch_postal", frontOfficeDispatchPostalRoutes);

//setup Bed

app.use("/api/bedFloorSetup", BedFloorSetup);
app.use("/api/bedGroupSetup", BedGroupSetup);
app.use("/api/bedTypeSetup", BedTypeSetup);
app.use("/api/bedListSetup", BedListSetup);
app.use("/api/bedStatusSetup", BedStatusSetup);

// pathology

app.use("/api/pathology/test", pathologyTest);
app.use("/api/pathology/bill", pathologyBill);
app.use("/api/pathology/generateBill", generatePathologyBill);
app.use("/api/pathology/categoryName", pathologyCategoryName);
app.use("/api/pathology/chargeCategory", pathologyChargeCategory);
app.use("/api/pathology/chargeName", pathologyChargeName);
app.use("/api/pathology/testParameterName", pathologyTestParameterName);
app.use("/api/pathology/testName", pathologyTestName);
app.use("/api/pathology/report", pathologyReport);
app.use("/api/pathology/transaction", pathologyTransaction);
app.use("/api/pathology/searchByPrescription", pathologySearchByPrescription);

// pathology setup

app.use("/api/pathology/setupCategory", pathoCategory);
app.use("/api/pathology/setupParameter", pathoParameter);
app.use("/api/pathology/setupUnit", pathoUnit);

// Inventory api route

app.use("/api/inventory/item", inventoryItem);
app.use("/api/inventory/itemCategory", inventoryItemCategory);
app.use("/api/inventory/itemStock", inventoryItemStock);
app.use("/api/inventory/itemSupplier", inventoryItemSupplier);
app.use("/api/inventory/itemStore", inventoryItemStore);
app.use("/api/inventory/issueItem", inventoryIssueItem);
app.use("/api/inventory/issueTo", inventoryItemIssueTo);
app.use("/api/inventory/issueUserType", inventoryItemUserType);

//Symptoms

app.use("/api/symptomHeadSetup", SymptomHeadSetup);
app.use("/api/symptomTypeSetup", SymptomTypeSetup);

//settings
app.use("/api/general/settings", General_setting);
app.use("/api/sms_settings", Sms_setting);
app.use("/api/paymentSetting", Payment_setting);
app.use("/api/rolesetting", Role_setting);
app.use("/api/role_setup", Role_setup_setting);
app.use("/api/email_settings", Email_setting);
app.use("/api/userpatientsetting", User_patient_setting);
app.use("/api/userstaffsetting", User_staff_setting);
app.use("/api/prefixsetting", Prefix_setting);

//Report
app.use("/api/patientcredsreport", Patientlogin_report);
app.use("/api/birthreport", Birth_report);
app.use("/api/deathreport", Death_report);
app.use("/api/incomereport", Income_report);
app.use("/api/expensereport", Expense_report);
app.use("/api/incomegroupreport", Income_head_report);
app.use("/api/expensegroupreport", Expense_head_report);
app.use("/api/inventoryissuereport", Inventory_issue_report);
app.use("/api/inventoryitemreport", Inventory_item_report);
app.use("/api/inventorystockreport", Inventory_stock_report);
app.use("/api/transactionreport", Transaction_report);
app.use("/api/dailytransaction", Daily_transaction_report);
app.use("/api/collectedby", Collected_by);
app.use("/api/tpareport", Tpa_report);
app.use("/api/patientvisitreport", Patient_visit_report);
app.use("/api/patientbillreport", Patient_bill_report);
app.use("/api/radiology_name", Radiology_name);
app.use("/api/radiologyCategory", RadiologyCategory);
app.use("/api/radiologypatientreport", Radiology_report);
app.use("/api/staffattendancereport", staff_attendance_report);
app.use("/api/payrollReport", payroll_report);
app.use("/api/ambulanceCallReport", ambulanceCall_report);
app.use("/api/ambulanceCollectedBy", ambulanceCollectedBy_report);
app.use("/api/ambulanceVehicleModel", ambulanceVehicalModel_report);
app.use("/api/bloodIssueReport", Blood_Issue_report);
app.use("/api/bloodDonorReport", Blood_Donor_report);
app.use("/api/bloodDonorDetails", Blood_Donor);
app.use("/api/OTReport", OT_report);
app.use("/api/componentIssueReport", Component_issue_report);
app.use("/api/componentReport", Component_report);
app.use("/api/referralReport", referral_report);
app.use("/api/payee", payee_report);
app.use("/api/patientType", patientType_report);
app.use("/api/TPAManagement", TPAManagement_report);
app.use("/api/TPAReport", TPA_report);

app.use("/api/pathologyReport", pathology_patient_report);
app.use("/api/pathologyCategory", pathology_category_report);
app.use("/api/pathologyName", pathology_name_report);
//certificates
app.use("/api/certificate", Certificate);
app.use("/api/downloadCenter", download_center);
app.use("/api/referralPayment", referral_payments);
app.use("/api/referralPerson", referral_person);
app.use("/api/referralCategory", referral_category);
app.use("/api/referralReport", referral_report);
// app.use('/api/signin', auth_Login)
//listen to the port
