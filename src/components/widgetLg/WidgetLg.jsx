import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transaction</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://www.ixpap.com/images/2021/01/girly-wallpaper-ixpap-2.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022 </td>
                <td className="widgetLgAmount">$222 </td>
                <td className="widgetLgSatus"><Button type="Approved" /> </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71UGeo40AIL.png" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022 </td>
                <td className="widgetLgAmount">$222 </td>
                <td className="widgetLgSatus"><Button type="Declined" /> </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://wallpapercave.com/wp/wp7694388.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022 </td>
                <td className="widgetLgAmount">$222 </td>
                <td className="widgetLgSatus"><Button type="Pending" /> </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://i.pinimg.com/474x/6c/76/d0/6c76d03e5aaa2c39de5f7d830739983f.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022 </td>
                <td className="widgetLgAmount">$222 </td>
                <td className="widgetLgSatus"><Button type="Approved" /> </td>
            </tr>
        </table>
    </div>
  )
}
