import { connect } from 'dva';
import Main from '../components/layout/main';
import UserTable from '../components/user/user';
import Usersearch from '../components/user/usersearch';
import Item from 'antd/lib/list/Item';

function UserPage({ user, location, dispatch }) {

    const { loading, list, pagination, currentItem, modalVisible, modalType } = user;
    const newList = list;
    
    console.log("99999999999999999999999999999999");
    console.log(currentItem.id);
    console.log(modalVisible);
    console.log(modalType);
    /**
   * 列表组件
   * @type {{dataSource: *, loading: *, pagination: *, onPageChange(*, *, *): void, onDeleteItem(*=): void, onEditItem(*=): void}}
   */
    const userListProps = {
        dataSource: newList,
        loading,
        pagination: pagination,
        onPageChange(pagination, filters, sorter) {
            dispatch({
                type: 'user/query',
                payload: {
                    //当前页
                    currentPage: pagination.current,
                    //每页数量
                    pageSize: pagination.pageSize,
                    insInfo: sorter.insInfo,
                    //排序方式
                    orderBy: sorter.field,
                    ...filters

                }
            });


        },
        //查看详情
        onClickCheck(item){
            console.log(item);
            dispatch({
                type: 'user/showModal',
                payload:{
                    modalType: 'queryDetail',
                    currentItem: item,
                }
            });

        },
        //操作列删除
        onDeleteItem(item) {
            console.log(item.id);
            dispatch({
                type: 'user/delete',
                payload: item.id
            });
        },
    };

    const userSerachProps = {

        onSearch(fieldsValue) {
            console.log(fieldsValue.keyword);
            dispatch({
                type: 'user/query',
                payload: {
                    name: fieldsValue.keyword
                }
            });

        },
        onReload() {
            dispatch({
                type: 'user/query',
                payload: {}
            });

        },
    }


    return (
        <div>
            <Usersearch {...userSerachProps} />
            <UserTable {...userListProps} />
        </div>
    );

}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps)(UserPage);

