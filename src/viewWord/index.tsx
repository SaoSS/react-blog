import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addBook,removeBook } from '../redux/action/bookQuery';
import {StoreState} from '../redux/storeType/bookQueryType';
import FileViewer from 'react-file-viewer';
//http%3a%2f%2ftest2.hytours.com%2fimages%5cImages%5cExcelUpload%5c2020%5c20%5c20200420103314855.xlsx
// let ExUrl = "http://test2.hytours.com/images\Images\ExcelUpload\2020\20\20200420103314855.xlsx"
//https://view.officeapps.live.com/op/view.aspx?src=http%3a%2f%2ftest2.hytours.com%2fimages%5cImages%5cExcelUpload%5c2020%5c20%5c20200420103314855.xlsx
class ViewWord extends React.Component {
    viewThis=()=>{
        window.open(" http://view.officeapps.live.com/op/view.aspx?src=http%3a%2f%2ftest2.hytours.com%2fimages%5cImages%5cExcelUpload%5c2020%5c20%5c20200420103314855.xlsx","_black")
    }
    render(){
        return(
            // <FileViewer 
            // fileType='xlsx'//文件类型
            // filePath="/images\Images\ExcelUpload\2020\20\20200420103314855.xlsx" //文件地址
            // />
            <div>
                <a onClick={this.viewThis}>231</a>
            </div>
        )
    }
}

export default ViewWord