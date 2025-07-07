// src/pages/AdminDashboard.jsx
import Card from '../components/cards/Card';
import api from '../api/axiosInstance';
import ContentTable from '../components/tables/ContentTable';
import PartnerSummaryTable from '../components/tables/PartnerSummaryTable';
import { useEffect, useState } from 'react';
//import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  BarChart, Bar, PieChart, Pie, FunnelChart, Funnel
} from 'recharts';

export default function AdminDashboard() {
  const [kpi,setKpi]=useState({});
  const [funnel,setFunnel]=useState([]);
  const [trend,setTrend]=useState([]);
  const [perf,setPerf]=useState([]);
  const [winloss,setWinLoss]=useState([]);
  const [content,setContent]=useState([]);
  //const [summary,setSummary]=useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(()=>{
    //axios.get('/api/dashboard/kpis').then(r=>setKpi(r.data));
    //axios.get('/api/dashboard/pipeline-funnel').then(r=>setFunnel(r.data));
    //axios.get('/api/dashboard/sales-trend?start=2024-01-01&end=2024-12-31').then(r=>setTrend(r.data));
    //axios.get('/api/dashboard/partner-performance').then(r=>setPerf(r.data));
    //axios.get('/api/dashboard/win-loss').then(r=>setWinLoss(r.data));
    //axios.get('/api/dashboard/content-summary').then(r=>setContent(r.data));
    //axios.get('/api/dashboard/partner-summary').then(r=>setSummary(r.data));
     api.get('/dashboard/kpis').then(r => setKpi(r.data));
     api.get('/dashboard/pipeline-funnel').then(r => setFunnel(r.data));
     api.get('/dashboard/sales-trend?start=2024-01-01&end=2024-12-31').then(r => setTrend(r.data));
     api.get('/dashboard/partner-performance').then(r => setPerf(r.data));
     api.get('/dashboard/win-loss').then(r => setWinLoss(r.data));
     api.get('/dashboard/content-summary').then(r => setContent(r.data));
     //api.get('/dashboard/partner-summary').then(r => setSummary(r.data));
     api.get('/partners/all').then(res => setPartners(res.data));
    },[]);

  return (
   <div className="p-6 grid gap-6">

     {/* KPI cards */}
     <div className="grid grid-cols-4 gap-4">
      <Card title="Total Partners"   value={kpi.totalPartners}/>
      <Card title="Active Partners"  value={kpi.activePartners}/>
      <Card title="Inactive Partners" value={kpi.inactivePartners}/>
      <Card title="Total Pipeline ($)" value={kpi.totalPipeline}/>
      <Card title="Deals Closed" value={0}/>
      <Card title="Win Rate" value={0}/>
      <Card title="Loss Rate" value={0}/>
      <Card title="Engagement rate " value={0}/>
     </div>

     {/* Charts 
     <div className="grid grid-cols-2 gap-6">
       <FunnelChart width={350} height={300}>
         <Funnel dataKey="count" data={funnel} isAnimationActive/>
       </FunnelChart>

       <LineChart width={350} height={300} data={trend}>
         <XAxis dataKey="_id"/><YAxis/><Tooltip/>
         <Line type="monotone" dataKey="total" strokeWidth={2}/>
       </LineChart>

       <BarChart width={350} height={300} data={perf}>
         <XAxis dataKey="partner"/><YAxis/><Tooltip/>
         <Bar dataKey="total"/>
       </BarChart>

       <PieChart width={350} height={300}>
         <Pie data={winloss} dataKey="count" nameKey="_id" label/>
       </PieChart>
     </div>
     */}

     {/* Content and partner summary tables */}
     <ContentTable rows={content}/>
     <PartnerSummaryTable rows={partners}/>
   </div>
  );
}
