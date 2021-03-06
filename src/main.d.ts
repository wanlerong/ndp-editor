import {CompositeDecorator, ContentBlock} from "draft-js";
import * as Immutable from 'immutable';

declare namespace NdpEditor {
  namespace Constants {
    const styleMap: any

    function blockStyleFn(block: ContentBlock): string;

    function blockStyleViewFn(block: ContentBlock): string;
  }

  namespace Readonly {

    function getBlockRenderMap(props: any): Immutable.Map<any, any>

    function Code(prop: CodeProps): JSX.Element;

    function Info(prop: InfoProps): JSX.Element;

    function getCompositeDecorator(config: any): CompositeDecorator

    function getBlockRenderFunc(config: any): (block: ContentBlock) => any

    function ReadonlyCellEditor(prop: ReadonlyCellEditorProps): JSX.Element;

    function ReadonlyEditor(prop: ReadonlyEditorProps): JSX.Element;

    function ViewImageModal(prop: ViewImageModalProps): JSX.Element;
  }
}

import Constants = NdpEditor.Constants
import Readonly = NdpEditor.Readonly

import {CodeProps} from "./readonly/block/Code";
import {InfoProps} from "./readonly/block/Info";
import {ReadonlyCellEditorProps} from "./readonly/CellEditor";
import {ReadonlyEditorProps} from "./readonly/Editor";
import {ViewImageModalProps} from "./readonly/renderer/Image/ViewModal";

export {
  Constants,
  Readonly
}