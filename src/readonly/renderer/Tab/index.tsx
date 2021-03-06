import * as React from 'react';
import {EditorState, convertFromRaw, ContentBlock, ContentState} from 'draft-js';
import ReadonlyCellEditor from '../../CellEditor';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  block?: ContentBlock,
  contentState?: ContentState
}

function MyTab(props: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const {block, contentState} = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const {list} = entity.getData();
  if (!list.length) {
    return null;
  }
  const blockKey = block.getKey()

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {list.map((item: any, index: any) => {
            return (
              <Tab label={item.title} {...a11yProps(blockKey, index)} />
            )
          })}
        </Tabs>
      </Box>
      {list.map((item: any, index: any) => {
        let raw = item.content;
        let editorState;
        if (!raw) {
          editorState = EditorState.createEmpty();
        } else {
          editorState = EditorState.createWithContent(convertFromRaw(raw));
        }
        return (
          <TabPanel value={value} index={index} blockKey={blockKey}>
            <ReadonlyCellEditor editorState={editorState}/>
          </TabPanel>
        )
      })}
    </Box>
  );
}

export default MyTab

function TabPanel(props: TabPanelProps) {
  const {children, value, index, blockKey, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${blockKey}-${index}`}
      aria-labelledby={`simple-tab-${blockKey}-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(blockKey: string, index: number) {
  return {
    id: `simple-tab-${blockKey}-${index}`,
    'aria-controls': `simple-tabpanel-${blockKey}-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  blockKey: string;
}