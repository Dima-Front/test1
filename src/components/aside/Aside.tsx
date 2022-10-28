import React, {useEffect, useState} from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import {PriceService} from "../../services/requests";






const useTreeItemStyles = makeStyles(theme => ({

    content: {
        flexDirection: "row-reverse",
        color: '#0084CA',




}}));


function StyledTreeItem(props: { [x: string]: any; labelText: any;  }) {
    const classes = useTreeItemStyles();
    const { labelText, ...other } = props;

    return (
        <TreeItem
            nodeId={''} label={<div >

        </div>}
            classes={{
                content: classes.content
            }}
            {...other}
        />
    );
}


const useStyles = makeStyles(theme => ({
    "@global": {
        ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
            backgroundColor: "none"
        },
        ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label": {
            backgroundColor: "none"
        }
    },
    root: {
        height: 216,
        fontSize: 16,
        maxWidth: 130
    }
}));

const Aside = () => {
    const classes = useStyles();

    const [tree, setTree] = useState<any[]>()


    async function getTree () {
        const response = await PriceService.priceTree("12")
        setTree(response.data.price)
    }


    useEffect(() => {
        getTree();
    }, [])
    console.log(tree)

    return (
        <>
            {!tree ? null : tree.map(elem => console.log(decodeURI(elem.name)))}
            <div className='left-page'>
               <span>  Услуги </span>
<div className='dropdown-group' >
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}

                >

                    <StyledTreeItem nodeId="1" label="Химчистка"  labelText={'gdfg'}>
                        <StyledTreeItem nodeId="2" label="Услуга"  labelText={'jgj'}/>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="5" label="Аквачистка" labelText={'jgj'}>
                        <StyledTreeItem nodeId="10" label="Услуга" labelText={'jgj'} />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="6" label="Ремонт одежды" labelText={'jgj'}>
                        <StyledTreeItem nodeId="11" label="Услуга" labelText={'jgj'} />

                    </StyledTreeItem>

                </TreeView>
</div>
            </div>
        </>

    );
};

export default Aside;


