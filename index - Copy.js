const express = require('express');
const bodyParser = require('body-parser');

//create the express app

const app = express();
const cors = require('cors')

//setup the server port

const port = process.env.PORT || 5000;

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse request data content type application/json
app.use(bodyParser.json());
app.use(cors());

//define the root route

app.get('/',(req,res)=>{
res.send('Hello World');
});

//import patient routes

const leave_type_route = require('./src/routes/leave_type.route');
const DepartmentRoute = require('./src/routes/department.route');
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
const outPatientLiveConsultationRoutes = require('./src/routes/outpatient.live_consultation.route');
const outPatientOpdDetailsRoutes = require('./src/routes/outpatient.opd_details.route');
const outPatientDischargeCardRoutes = require('./src/routes/outpatient.discharge_card.route');


//import frontoffice routes

const frontOfficeVisitorsBookRoutes = require('./src/routes/frontoffice.visitors_book.route');
const frontOfficeCallLogRoutes = require('./src/routes/frontoffice.general_calllog.route');
const frontOfficeRecievedPostalRoutes = require('./src/routes/frontoffice.recievedpostal.route');
const frontOfficeDispatchPostalRoutes = require('./src/routes/frontoffice.dispatchpostal.route');
const frontOfficeComplaintRoutes = require('./src/routes/frontoffice.complaint.route');

//appointment routes
const appointmentAddRoutes = require('./src/routes/appointment.route');
const addPatientRoutes = require('./src/routes/patients.route');

//IPD routes
const medicationRoute =require('./src/routes/medication.route');
const operationRoute = require('./src/routes/operation.route');
const chargeRoute = require('./src/routes/charge.route');
const timelinneRouter = require('./src/routes/timeline.route');
const bed_history_route = require('./src/routes/bed_history.route');
const treatment_history_router = require('./src/routes/treatment_history.route');
const lab_investigation_router = require('./src/routes/lab_investigation.route');
const ipd_details_route = require('./src/routes/ipd_details.route');
const consultant_register_route = require('./src/routes/consultant_register.route');
const nurse_note_route = require('./src/routes/nurse_note.route');
const bloodbankRoute = require('./src/routes/bloodbank.route');
// const consultant_doctor = require('./src/routes/consultant.route');

//Pharmacy routes

const PatientRoute = require('./src/routes/pharmacyPatient.route');
const PurchaseRoute = require('./src/routes/pharmacyPurchase.route')
const MedicineRoute = require('./src/routes/pharmacyMedicine.route');
const MedicineSupplierRoute =require('./src/routes/medicineSupplier.route')
const PharmacyPurchaseDetailRoute = require('./src/routes/pharmacyPurchaseDetails.route');
const CSVRoute = require('./src/routes/csvImport.route')
const billBasicRoute = require('./src/routes/pharmacyBillBasic.route')
const pharmacyTransaction = require('./src/routes/pharmacyTransactions.route')
const pharmacyBillDetails = require('./src/routes/pharmacyBillDetails.route')
const medicineCategory = require('./src/routes/medicineCategory.route')
const medicineName = require('./src/routes/medicineName.route')
const BatchDetailsRoute = require('./src/routes/batchNo.route');

//Pathology Routes
const generate_pathology_billRoute = require('./src/routes/generate_pathology_bill.route');
const list_pathology_testRoute = require('./src/routes/list_pathology_test.route');
const newpatientRoute = require('./src/routes/new_patient.route');
const list_pathology_bill_testRoute = require('./src/routes/pathology_bill.route');
const pathology_report = require('./src/routes/pathology_report_route');
const pathology_transactionRoute = require('./src/routes/pathology_transaction.route');
const Patient_Route = require('./src/routes/patient.route');
const prescriptionRoute = require('./src/routes/search_by_prescription.route');
// const appointmentshiftRoute = require('./src/routes/shift.appointment.route');

const user_by_roles = require('./src/routes/user_by_roles.route');

const PatientQueueSlotRoute = require('./src/routes/patientQueueSlot.route');
const appointmentshiftRoute = require('./src/routes/appointmentShift.route');

// Setup Charges
const UnitTypeRoute = require('./src/routes/unitType.route')
const TaxCategoryRoute = require('./src/routes/taxCategory.route')
const ChargeTypeRoute = require('./src/routes/chargeType.router')
const chargeTypeModuleRoute = require('./src/routes/chargeTypeModule');
const ChargeCategoryRoute = require('./src/routes/chargeCategory.route')
const ChargesRoute = require('./src/routes/setupcharge.route');
const Charge_typeRoute = require('./src/routes/charge_type.route');
const Charge_categoryRoute = require('./src/routes/charge_category.route');
const Charge_nameRoute = require('./src/routes/charge_name.route');
const DosageDurationRoute = require('./src/routes/dosageDuration.route');
const DosageIntervalRoute = require('./src/routes/dosageInterval.route');
const MedicineCategoryRoute = require('./src/routes/medicine_Category.route')
const MedicineSupplier = require('./src/routes/medicine_Supplier.route')
const MedicineDosageRoute = require('./src/routes/medicineDosage.route')

//opdprofile

const patientVisitRoutes = require('./src/routes/outpatient.visits.route');
const patientTimelineRoutes = require('./src/routes/outpatient.timeline.route');
const outPatientChargesRoutes = require('./src/routes/outpatient.patientcharges.route');
const patientMedicationRoutes = require('./src/routes/outpatient.medication.route');
const patientOperationsRoutes = require('./src/routes/outpatient.operations.route');
const outPatientPaymentRoutes = require('./src/routes/outpatient.payment.route');
const consultant_doctor = require('./src/routes/consultant.route');
const OpdDosage = require('./src/routes/dosage.route');
const OpdMedicineCategory = require('./src/routes/medicineCategory.route');
const OpdMedicineName = require('./src/routes/medicineName.route');
const OpdOperationCategory = require('./src/routes/operationCategory.route');
const OpdOperationName = require('./src/routes/operationName.route');
const chargeCategory = require('./src/routes/charge_category.route');
const chargeName = require('./src/routes/charge_name.route');
const ipdChargeName = require('./src/routes/charge_name.route')
const chargeType = require('./src/routes/charge_type.route');
const labInvest = require('./src/routes/outpatient.lab_invest.route');
const treatmentHistory = require('./src/routes/outpatient.treatment_his.route');

const discharged_patient_route = require('./src/routes/dischargePatient.route');

// ipd profile routes

const nurse_by_roles = require('./src/routes/user_by_nurse.route');
const ipd_user_by_roles = require('./src/routes/user_by_roles.route');
const SpecialistRoute = require('./src/routes/specialist.route');
const ipd_medicationRoute =require('./src/routes/medication.route');
const ipd_operationRoute = require('./src/routes/operation.route');
const ipd_chargeRoute = require('./src/routes/charge.route');
const ipd_consultant_register_route = require('./src/routes/consultant_register.route');
const ipd_paymentRouter = require('./src/routes/payments.route');
const ipd_timelinneRouter = require('./src/routes/timeline.route');
const ipd_bed_history_route = require('./src/routes/bed_history.route');
const ipd_treatment_history_router = require('./src/routes/treatment_history.route');
const ipd_lab_investigation_router = require('./src/routes/lab_investigation.route');
const ipd_VisitorsPurposeRoute = require('./src/routes/visitors_purpose.route');
const radiologys = require('./src/routes/radiology_route')
const pathologys = require('./src/routes/pathology.route')
const findingCategory = require('./src/routes/findingCategory.route')
const findings = require('./src/routes/finding.route')

const PrescriptionBasicRouter = require('./src/routes/prescriptionBasic.route');
const prescriptionRouter = require('./src/routes/prescription.route');
const prescriptionDetailsRoute = require('./src/routes/prescriptionDetails.route')
const prescriptionBasic = require('./src/routes/prescriptionBasic.route')
const prescriptionDetails = require('./src/routes/prescriptionDetails.route')
const prescriptionTest = require('./src/routes/prescriptionTest.route')

const operationCategory = require('./src/routes/operationCategory.route')
const operationName = require('./src/routes/operationName.route')
const ipd_patientdetails = require('./src/routes/ipd_details1.route')



//create patient routes

app.use('/api/leaveTypes',leave_type_route);
app.use('/api/departments',DepartmentRoute);
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
app.use('/api/outpatient/live_consultation',outPatientLiveConsultationRoutes);
app.use('/api/outpatient/opd_details',outPatientOpdDetailsRoutes);
app.use('/api/outpatient/discharge_card',outPatientDischargeCardRoutes);


// create frontoffice routes

app.use('/api/frontoffice/visitors_book',frontOfficeVisitorsBookRoutes);
app.use('/api/frontoffice/call_log',frontOfficeCallLogRoutes);
app.use('/api/frontoffice/recieved_postal',frontOfficeRecievedPostalRoutes);
app.use('/api/frontoffice/dispatch_postal',frontOfficeDispatchPostalRoutes);
app.use('/api/frontoffice/complaint',frontOfficeComplaintRoutes);


// appointment routes
app.use('/api/appointment/add_appointment', appointmentAddRoutes)
app.use('/api/appointment/add_patient',addPatientRoutes)

//IPD Routes
app.use('/api/medication',medicationRoute);
app.use('/api/operation',operationRoute);
app.use('/api/charge',chargeRoute);
app.use('/api/consultant_register',consultant_register_route);
app.use('/api/timeline',timelinneRouter);
app.use('/api/bedHistory',bed_history_route);
app.use('/api/ipd_details',ipd_details_route);
app.use('/api/treatmentHistory',treatment_history_router);
app.use('/api/labinvestigation',lab_investigation_router);
app.use('/api/nursenote',nurse_note_route);
app.use('/api/chargeName',ipdChargeName)
//bloodproduct

app.use('/api/bloodbank_products',bloodbankRoute)

//consultant

app.use('/api/nurse_Roles',consultant_doctor)

//pharmacy 
app.use('/api/batchNo',BatchDetailsRoute);
app.use('/api/patient',PatientRoute);
app.use('/api/pharmacyPurchase',PurchaseRoute)
app.use('/api/medicineSupplier',MedicineSupplierRoute);
app.use('/api/purchaseMedicineDetails',PharmacyPurchaseDetailRoute)
app.use('/api/csvImport',CSVRoute);
app.use('/api/pharmacyBasicBill',billBasicRoute)
app.use('/api/pharmacyTransaction',pharmacyTransaction)
app.use('/api/pharmacyBillDetails',pharmacyBillDetails)
app.use('/api/medicineCategory',medicineCategory);
app.use('/api/medicineName',medicineName)
app.use('/api/pharmacyMedicine',MedicineRoute)
app.use('/api/generate_pathology_bill',generate_pathology_billRoute);
app.use('/api/list_pathology_test',list_pathology_testRoute);
app.use('/api/newpatient',newpatientRoute);
app.use('/api/list_pathologybilltest',list_pathology_bill_testRoute);
app.use('/api/pathology_report',pathology_report);
app.use('/api/pathology_transaction',pathology_transactionRoute);
app.use('/api/patient',PatientRoute);
app.use('/api/prescription',prescriptionRoute);
app.use('/api/appointmentShift',appointmentshiftRoute);
app.use('/api/user_Roles',user_by_roles);
app.use('/api/patienQueueSlot',PatientQueueSlotRoute)


app.use('/api/appointmentShift',appointmentshiftRoute);
app.use('/api/unitType',UnitTypeRoute)
app.use('/api/taxCategory',TaxCategoryRoute)
// app.use('/api/chargeType',ChargeTypeRoute)
app.use('/api/chargeTypeModule',chargeTypeModuleRoute)
app.use('/api/chargeCategory',ChargeCategoryRoute)


app.use('/api/setupcharge',ChargesRoute)
app.use('/api/chargetype', Charge_typeRoute) 
app.use('/api/charge_category', Charge_categoryRoute)
app.use('/api/charge_name',Charge_nameRoute)
const chargeRoutes = require('./src/routes/charge.route');
app.use('/api/charge',chargeRoutes);
//setup Pharmacy
app.use('/api/dosageDuration',DosageDurationRoute);
app.use('/api/dosageInterval',DosageIntervalRoute)
app.use('/api/medicine_Category',MedicineCategoryRoute)
app.use('/api/medicine_Supplier',MedicineSupplier)
app.use('/api/medicineDosage',MedicineDosageRoute)

//opdprofile


app.use('/api/outpatient/visits',patientVisitRoutes);
app.use('/api/outpatient/timeline',patientTimelineRoutes);
app.use('/api/outpatient/patientcharges',outPatientChargesRoutes);
app.use('/api/outpatient/medication',patientMedicationRoutes);
app.use('/api/outpatient/operations',patientOperationsRoutes);
app.use('/api/outpatient/payment',outPatientPaymentRoutes);
app.use('/api/nurse_Roles',consultant_doctor)
app.use('/api/outpatient/dosage',OpdDosage)
app.use('/api/outpatient/medicineCategory',OpdMedicineCategory)
app.use('/api/outpatient/medicineName',OpdMedicineName)
app.use('/api/outpatient/operationCategory',OpdOperationCategory)
app.use('/api/outpatient/operationName',OpdOperationName)
app.use('/api/outpatient/chargeCategory',chargeCategory)
app.use('/api/outpatient/chargeName',chargeName)
app.use('/api/outpatient/chargeType',chargeType)
app.use('/api/outpatient/labInvest',labInvest)
app.use('/api/outpatient/treatmentHistory',treatmentHistory)

//discharge_patient
app.use('/api/dischargedPatient',discharged_patient_route);


//ipd profile routes

app.use('/api/nurse_Roles',nurse_by_roles)
app.use('/api/user_Roles',ipd_user_by_roles);
app.use('/api/specialist',SpecialistRoute);
app.use('/api/medication',ipd_medicationRoute);
app.use('/api/operation',ipd_operationRoute);
app.use('/api/charge',ipd_chargeRoute);
app.use('/api/consultant_register',ipd_consultant_register_route);
app.use('/api/payments',ipd_paymentRouter);
app.use('/api/timeline',ipd_timelinneRouter);
app.use('/api/bedHistory',ipd_bed_history_route);
app.use('/api/treatmentHistory',ipd_treatment_history_router);
app.use('/api/labinvestigation',ipd_lab_investigation_router);
app.use('/api/visitorPurpose',ipd_VisitorsPurposeRoute);


app.use('/api/radiologys',radiologys);
app.use('/api/pathology',pathologys);
app.use('/api/findingCategory',findingCategory);
app.use('/api/findings',findings);
app.use('/api/prescriptionBasic',PrescriptionBasicRouter);
app.use('/api/prescription',prescriptionRouter)
app.use('/api/prescriptionDetails',prescriptionDetailsRoute);
app.use('/api/prescriptionBasic',prescriptionBasic)
app.use('/api/prescripationDetails',prescriptionDetails)
app.use('/api/prescriptionTest',prescriptionTest)
app.use('/api/operationCategory',operationCategory)
app.use('/api/operationName',operationName)
app.use('/api/ipd_patientdetails',ipd_patientdetails)
//listen to the port


app.listen(port,()=>{
console.log(`server is running at port ${port}`);
});