import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@mui/lab/TreeItem';
import {makeStyles} from "@material-ui/core/styles";
import {ExpandLess} from "@mui/icons-material";
import cardStore from "../../store/cardStore";

const useTreeItemStyles = makeStyles(() => ({
    content: {
        width: 263,
        flexDirection: 'row-reverse',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',


    },

    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    },
    label: {
        maxWidth: 160,
        overflow: 'hidden',
        height: 'auto',
        color: '#0084CA',
        textDecoration: 'underline'


    },


}));



const Tree = (props:any) => {

    const {tree, labelText, ...other} = props;
    const classes = useTreeItemStyles();
    const renderTree = (nodes: { folder_id: string; name: string; children: any[]; parent: string }) => {

        return (
                <TreeItem
                    onClick={ nodes.parent ? () => cardStore.getCardPriceList(nodes.folder_id) : null}
                    className={nodes.parent !== '' ? 'aaa' : null}
                    key={nodes.folder_id}
                    nodeId={nodes.folder_id}
                    label={
                        <div className={classes.labelRoot}> {decodeURI(nodes.name.slice(3))} </div>
                    }
                    classes={{
                        content: classes.content,
                        label: classes.label,
                    }}
                    {...other}

                >
                    {Array.isArray(nodes.children)
                        ? nodes.children.map((node: any) => renderTree(node))
                        : null}
                </TreeItem>
            )
        };


    return (

        <TreeView
            className={classes.content}
            aria-label="rich object"
            defaultCollapseIcon={<ExpandLess/>}
            defaultExpanded={["root"]}
            defaultExpandIcon={<ExpandMoreIcon/>}
        >
            {tree.map((el: any) => {
               if (el.folder_id) {

               }
                return renderTree(el);
            })}
        </TreeView>
    );

};

export default Tree;