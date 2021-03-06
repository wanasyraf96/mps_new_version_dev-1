import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import { getUser, getNOKP, getToken, removeUserSession } from "./Utils/Common";
import MainDashboard from "./views/admin/Dashboard";
import Sidebar from "./Sidebar";
import Navbar from "./components/Navbars/AdminNavbar";
import Information from "./components/Cards/CardSettings";
import Footer from "./components/Footers/Footer";
import { data } from "jquery";
import swal from "sweetalert";
import { ResponsiveEmbed } from "react-bootstrap";
import { BrowserRouter as Router,Switch,	Route, Link, useParams,	useRouteMatch } from "react-router-dom";
import SenaraiBil from './SenaraiBil';
import Carian from './Carian';

function Bill(props) {

  const token   = getToken();
  const user    = getUser();
  const nokp    = getNOKP();

  const [include,isInclude] = useState(false);
	const [dataset, setDataSet] = useState(		{
		// jenis:'',
		// akaun:'',
		// amaun:'',
		// tempoh:'',
		// status:''

		jenis: 'Cukai Taksiran',
		akaun: 'A929181',
		amaun:'RM 30.00',
		tempoh:'Julai - Disember 2020',
		status:'Telah dibayar'
	});

		// setDataset({
		// 	...dataset,
		// 	jenis: 'Cukai Taksiran',
		// 	akaun: 'A929181',
		// 	amaun:'RM 30.00',
		// 	tempoh:'Julai - Disember 2020',
		// 	status:'Telah dibayar'
		// });

  // useEffect(async() => {

  //   var url = "https://toyyibpay.com/api/getBankFPX";

  //   const tarik   = await fetch(url);
  //   const data    = await tarik.json();

  //   for(var i = 0; i < data.length; i++){
  //     const item  = data[i].CODE;
  //     setDataSet(item);
  //   }
    
	// }, []);

	// bil > {bawak state} > bil detail
	
	
	const handleReceipt= (e) =>{
		// let url = 
		console.log(user);
		console.log(token);
		console.log(nokp);
		let id= '1';

		let url = btoa('nokp='+nokp+'&code=receipt'+'&id='+id);
		window.open('https://mymps.corrad.my/rp/receipt.php?'+url);
	}

	const handleReceipt2 = (e) => {
		let id= '2';
		let url = btoa('nokp='+nokp+'&code=receipt'+'&id='+id);
		window.open('https://mymps.corrad.my/rp/receipt.php?'+url);
  }
  
  const handleViewBill = (e) => {
		// set=[e.target.id]
		// return (
		// 	 senarai = <Senarai />
		console.log('View');
	
	}
	
	const handleAddBill = (e) => {
		// set=[e.target.id]
		console.log('Add Bill');
  }

  let { path, url } = useRouteMatch;

  // console.log(dataset);

  return (
	<div>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-400" style={{ height: "100%" }}>
        <Navbar />
				{/* Header */}
				<div className="relative bg-green-400 md:pt-32 pt-4 pb-4" >


					<div className="px-4 md:px-10 mx-auto w-full" >
						<div className="flex flex-wrap">
							<div className="w-full px-4">
								<div className="relative flex flex-col min-w-0 break-words">
									<div className="flex-auto p-4">
										<div className="flex flex-row ">
											<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
												<span className="font-semibold text-xl text-white">
												Bil Saya
												</span>	
											</div>
											{
												//  Function Add bill
												//  function xhold apa2 state boleh terus jadi function
												//  create function
												// form input?
											}
											<div className="relative w-auto pl-4 flex-initial" onClick={handleAddBill}>
												<span className="font-semibold text-lg text-white">
													+ Tambah
												</span>	
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{
						// List state -> so class
						// View bill state -> class jugak
						// routing sikit
					}
					<div className="px-4 md:px-10 mx-auto w-full" onClick={handleViewBill}>
						<div className="flex flex-wrap">
							<div className="w-full px-4">
								<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 shadow-lg">
									<div className="flex-auto p-4">
										<div className="flex flex-row pt-4">
											<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
												<span className="font-semibold text-lg text-gray-800">
												{dataset.jenis}
												</span>	
											</div>
											<div className="relative w-auto pl-4 flex-initial">
												<span className="font-semibold text-lg text-gray-800">
												{dataset.amaun}
												</span>	
											</div>
										</div>
										<div className="flex flex-row pb-4">
											<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
												<span className="font-semibold text-lg text-gray-800">
												{dataset.akaun}
												</span>	
												<h5 className="uppercase font-medium text-xs text-gray-600">
												{dataset.tempoh}
												</h5>
											</div>
											<div className="relative w-auto pl-4 flex-initial">
												<h5 className="uppercase font-medium text-xs text-green-600">
												{dataset.status}
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				<div className="px-4 md:px-10 mx-auto w-full" onClick={handleViewBill}>
					<div className="flex flex-wrap">
						<div className="w-full px-4">
							<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 shadow-lg">
								<div className="flex-auto p-4">
									<div className="flex flex-row pt-4">
										<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
											<span className="font-semibold text-lg text-gray-800">
											Cukai Taksiran
											</span>	
										</div>
										<div className="relative w-auto pl-4 flex-initial">
											<span className="font-semibold text-lg text-gray-800">
											RM 30.00
											</span>	
										</div>
									</div>
									<div className="flex flex-row pb-4">
										<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
											<span className="font-semibold text-lg text-gray-800">
											A929181
											</span>	
											<h5 className="uppercase font-medium text-xs text-gray-600">
											Tempoh Julai - disember 2020
											</h5>
										</div>
										<div className="relative w-auto pl-4 flex-initial">
											<h5 className="uppercase font-medium text-xs text-red-600">
											Belum Dibayar
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
				
				<Carian />
				<SenaraiBil />

        <Footer />
      </div>
    </div>
  );
}

export default Bill;
