import { options } from "../utils/selectMenus"

type HeatMapMProps = {
    habitName:string;
}
export default function HeatMap({habitName}:HeatMapMProps) {
    const days = options.map(option => {
        return (
          <div  className="dayBox">
            {option.label}
          </div>
        )
      })

    return (
        <div className="habitRowContainer">
            <p className="habitName">{habitName}</p>
            <div className="square">{days}</div>
        </div>
    )

}








// import CalHeatmap from 'cal-heatmap';

// // Optionally import the CSS
// import 'cal-heatmap/cal-heatmap.css';


// export default function HeatMap(){
    
//     const sameRowDayTemplate = function (DateHelper: any):any {
//         return {
//           name: 'day_same_row',
//           parent: 'day',
//           rowsCount() {
//             return 1;
//           },
//           columnsCount() {
//             return 31;
//           },
//           mapping: (startDate:any, endDate:any, defaultValues:any) =>
//             DateHelper.intervals('day', startDate, DateHelper.date(endDate)).map(
//               (d:any, index:any) => ({
//                 t: d,
//                 x: index,
//                 y: 0,
//                 ...defaultValues,
//               })
//             ),
//           // Missing extractUnit property, will be inherit from parent
//         };
//       };
//       const cal = new CalHeatmap();
//       cal.addTemplates(sameRowDayTemplate);
      
//       cal.paint({
//         verticalOrientation:true,
//         theme:'light',
//         range: 1,
//         itemSelector: '#example-month',
//         domain: { 
//             type: 'month',
//             label: {
//                 position: 'top',
//                 width: 100,
//                 height:50
//             },
//         },
//         subDomain: { 
//             type: 'day_same_row', 
//             height: 20, 
//             width: 20, 
//             label: 'D',
//         }
        
//       });

//       return(
//         <div>
//             <div className="graph-label"></div>
//             <div id="example-month"></div>


//         </div>
//     )
// }