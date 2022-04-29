(function ($, undefined) {
    /* FlatColorPicker messages */

    if (kendo.ui.FlatColorPicker) {
        kendo.ui.FlatColorPicker.prototype.options.messages =
            $.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages, {
                "apply": "�����",
                "cancel": "�����",
                "noColor": "��� ���",
                "clearColor": "����� �����"
            });
    }

    /* ColorPicker messages */

    if (kendo.ui.ColorPicker) {
        kendo.ui.ColorPicker.prototype.options.messages =
            $.extend(true, kendo.ui.ColorPicker.prototype.options.messages, {
                "apply": "�����",
                "cancel": "�����",
                "noColor": "���� ���",
                "clearColor": "����� �����"
            });
    }

    /* ColumnMenu messages */

    if (kendo.ui.ColumnMenu) {
        kendo.ui.ColumnMenu.prototype.options.messages =
            $.extend(true, kendo.ui.ColumnMenu.prototype.options.messages, {
                "sortAscending": "����� ������",
                "sortDescending": "����� ������",
                "filter": "���",
                "column": "����",
                "columns": "�����",
                "columnVisibility": "���� ������",
                "clear": "���",
                "cancel": "�����",
                "done": "��",
                "settings": "����� ������� ������",
                "lock": "��� ������",
                "unlock": "����� ��� ������",
                "stick": "����� �������",
                "unstick": "����� ����� ������",
                "setColumnPosition": "����� ���� ������",
                "apply": "�����",
                "reset": "����� ���",
                "buttonTitle": "{0} ����� ������� ������"
            });
    }

    /* DateRangePicker messages */

    if (kendo.ui.DateRangePicker) {
        kendo.ui.DateRangePicker.prototype.options.messages =
            $.extend(true, kendo.ui.DateRangePicker.prototype.options.messages, {
                "startLabel": "�����",
                "endLabel": "�����"
            });
    }

    /* Editor messages */

    if (kendo.ui.Editor) {
        kendo.ui.Editor.prototype.options.messages =
            $.extend(true, kendo.ui.Editor.prototype.options.messages, {
                "bold": "����",
                "italic": "����",
                "underline": "���� ��",
                "strikethrough": "������� ��",
                "superscript": "��� ����",
                "subscript": "��� ����",
                "justifyCenter": "������ �� �������",
                "justifyLeft": "������ ���� ��� ������",
                "justifyRight": "������ ���� ��� ������",
                "justifyFull": "������",
                "insertUnorderedList": "����� ����� ��� �����",
                "insertOrderedList": "����� ����� �����",
                "indent": "����� �����",
                "outdent": "������ �������",
                "createLink": "����� ����",
                "unlink": "����� ������",
                "insertImage": "����� ����",
                "insertFile": "����� ���",
                "insertHtml": "HTML �����",
                "viewHtml": "HTML ���",
                "fontName": "���� ������ ������",
                "fontNameInherit": "(��� ����)",
                "fontSize": "���� ��� ����",
                "fontSizeInherit": "(��� ����)",
                "formatBlock": "�����",
                "formatting": "�����",
                "foreColor": "���",
                "backColor": "��� �������",
                "style": "�����",
                "emptyFolder": "���� ����",
                "uploadFile": "���",
                "overflowAnchor": "����� ����",
                "orderBy": "����� ������:",
                "orderBySize": "�����",
                "orderByName": "�����",
                "invalidFileType": "����� ������ \"{0}\" ��� ����. ����� ������� �������� �� {1}.",
                "deleteFile": "�� ��� ����� �� ��� ����� '{0}'�",
                "overwriteFile": "���� ��� ���� \"{0}\" ������ �� ������ ������. �� ���� ��������",
                "directoryNotFound": "�� ��� ������ ��� ���� ���� �����.",
                "imageWebAddress": "����� ���� ��������",
                "imageAltText": "�� ����",
                "imageWidth": "����� (����)",
                "imageHeight": "�������� (����)",
                "fileWebAddress": "����� ���� ��������",
                "fileTitle": "�����",
                "linkWebAddress": "����� ���� ��������",
                "linkText": "��",
                "linkToolTip": "�����",
                "linkOpenInNewWindow": "��� ������ �� ����� �����",
                "dialogUpdate": "�����",
                "dialogInsert": "�����",
                "dialogButtonSeparator": "��",
                "dialogCancel": "�����",
                "cleanFormatting": "����� �������",
                "createTable": "����� ����",
                "addColumnLeft": "��� ���� ��� ������",
                "addColumnRight": "��� ���� ��� ������",
                "addRowAbove": "��� �� ��� ������",
                "addRowBelow": "��� �� ��� ������",
                "deleteRow": "��� ��",
                "deleteColumn": "��� ����",
                "dialogOk": "�����",
                "tableWizard": "����� �������",
                "tableTab": "����",
                "cellTab": "����",
                "accessibilityTab": "������� ������",
                "caption": "���",
                "summary": "����",
                "width": "�����",
                "height": "������",
                "units": "�������",
                "cellSpacing": "����� �������",
                "cellPadding": "���� ������",
                "cellMargin": "���� ������",
                "alignment": "��������",
                "background": "�������",
                "cssClass": "��� �� CSS",
                "id": "ID",
                "border": "����",
                "borderStyle": "��� ������",
                "collapseBorders": "����� ������",
                "wrapText": "������ ����",
                "associateCellsWithHeaders": "���� ������",
                "alignLeft": "������ ��� ������",
                "alignCenter": "������ ��� �������",
                "alignRight": "������ ��� ������",
                "alignLeftTop": "������ ��� ���� ������",
                "alignCenterTop": "������ ��� ���� �������",
                "alignRightTop": "������ ��� ���� ������",
                "alignLeftMiddle": "������ ��� ��� ������",
                "alignCenterMiddle": "������ ��� ��� �������",
                "alignRightMiddle": "������ ��� ��� ������",
                "alignLeftBottom": "������ ��� ���� ������",
                "alignCenterBottom": "������ ��� ���� �������",
                "alignRightBottom": "������ ��� ���� ������",
                "alignRemove": "����� ��������",
                "columns": "�������",
                "rows": "����",
                "selectAllCells": "����� �� �������",
                "print": "�����",
                "headerRows": "��� ������",
                "headerColumns": "��� �������",
                "tableSummaryPlaceholder": "��� ������ ��� ������� �� HTML5.",
                "associateNone": "�� ���",
                "associateScope": "������ �������� ��� \"������\"",
                "associateIds": "������ �������� ��������",
                "copyFormat": "��� �������",
                "applyFormat": "����� �������",
                "borderNone": "�� ���"
            });
    }

    /* FileBrowser messages */

    if (kendo.ui.FileBrowser) {
        kendo.ui.FileBrowser.prototype.options.messages =
            $.extend(true, kendo.ui.FileBrowser.prototype.options.messages, {
                "uploadFile": "���",
                "orderBy": "����� ������",
                "orderByName": "�����",
                "orderBySize": "�����",
                "directoryNotFound": "�� ��� ������ ��� ���� ���� �����.",
                "emptyFolder": "���� ����",
                "deleteFile": "�� ��� ����� �� ��� '{0}'�",
                "invalidFileType": "����� \"{0}\" ��� ���͡ ����� ������� �������� �� {1}.",
                "overwriteFile": "����� ���� \"{0}\" ����� ������ �� ������. �� ���� ��������",
                "dropFilesHere": "�� ���� ����� ��� �����",
                "search": "���"
            });
    }

    /* FileManager messages */

    if (kendo.ui.FileManager) {
        kendo.ui.FileManager.prototype.options.messages =
            $.extend(true, kendo.ui.FileManager.prototype.options.messages, {
                toolbar: {
                    createFolder: "���� ����",
                    upload: "���",
                    sortDirection: "�����",
                    sortDirectionAsc: "����� ������",
                    sortDirectionDesc: "����� ������",
                    sortField: "����� ������",
                    nameField: "�����",
                    sizeField: "��� �����",
                    typeField: "�����",
                    dateModifiedField: "����� �������",
                    dateCreatedField: "����� �������",
                    listView: "��� �������",
                    gridView: "��� ����",
                    search: "���",
                    details: "��� ��������",
                    detailsChecked: "����",
                    detailsUnchecked: "��� ����",
                    "delete": "���",
                    rename: "����� �������"
                },
                views: {
                    nameField: "�����",
                    sizeField: "��� �����",
                    typeField: "�����",
                    dateModifiedField: "����� �������",
                    dateCreatedField: "����� �������",
                    items: "�������"
                },
                dialogs: {
                    upload: {
                        title: "��� �������",
                        clear: "����� �������",
                        done: "��"
                    },
                    moveConfirm: {
                        title: "����� ����� �� �����",
                        content: "<p style='text-align: center;'>�� ��� ����� �� ����� ����� �� ����ݿ</p>",
                        okText: "���",
                        cancel: "���",
                        close: "�����"
                    },
                    deleteConfirm: {
                        title: "����� �����",
                        content: "<p style='text-align: center;'>�� ��� ����� �� ��� ������� ������ɿ?</br>�� ����� ������� �� ��� �������.</p>",
                        okText: "���",
                        cancel: "�����",
                        close: "�����"
                    },
                    renamePrompt: {
                        title: "����� �������",
                        content: "<p style='text-align: center;'>���� ��� ��� ����</p>",
                        okText: "����� �������",
                        cancel: "�����",
                        close: "�����"
                    }
                },
                previewPane: {
                    noFileSelected: "�� ��� ������ �� ���",
                    extension: "�����",
                    size: "�����",
                    created: "����� �������",
                    createdUtc: "����� ������� (UTC)",
                    modified: "����� �������",
                    modifiedUtc: "����� ������� (UTC)",
                    items: "�������"
                }
            });
    }

    /* FilterCell messages */

    if (kendo.ui.FilterCell) {
        kendo.ui.FilterCell.prototype.options.messages =
            $.extend(true, kendo.ui.FilterCell.prototype.options.messages, {
                "isTrue": "����",
                "isFalse": "���",
                "filter": "���",
                "clear": "�����",
                "operator": "����"
            });
    }

    /* FilterCell operators */

    if (kendo.ui.FilterCell) {
        kendo.ui.FilterCell.prototype.options.operators =
            $.extend(true, kendo.ui.FilterCell.prototype.options.operators, {
                "string": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "startswith": "���� ��",
                    "contains": "�����",
                    "doesnotcontain": "�� �����",
                    "endswith": "����� ��",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����",
                    "isempty": "����",
                    "isnotempty": "��� �����",
                    "isnullorempty": "��� �� ����",
                    "isnotnullorempty": "�� ����"
                },
                "number": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "gte": "���� �� �� �����",
                    "gt": "���� ��",
                    "lte": "��� �� �� �����",
                    "lt": "��� ��",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����"
                },
                "date": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "gte": "��� �� �����",
                    "gt": "���",
                    "lte": "��� �� �����",
                    "lt": "���",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����"
                },
                "enums": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����"
                }
            });
    }

    /* FilterMenu messages */

    if (kendo.ui.FilterMenu) {
        kendo.ui.FilterMenu.prototype.options.messages =
            $.extend(true, kendo.ui.FilterMenu.prototype.options.messages, {
                "info": "����� ������� ��� ������ ����:",
                "title": "����� ������� ��� ������ ����",
                "isTrue": "����",
                "isFalse": "���",
                "filter": "���",
                "clear": "�����",
                "and": "�",
                "or": "��",
                "selectValue": "-���� ������-",
                "operator": "����",
                "value": "����",
                "cancel": "�����",
                "done": "��",
                "into": "��",
                "buttonTitle": "{0} ��� ������� ������"
            });
    }

    /* FilterMenu operator messages */

    if (kendo.ui.FilterMenu) {
        kendo.ui.FilterMenu.prototype.options.operators =
            $.extend(true, kendo.ui.FilterMenu.prototype.options.operators, {
                "string": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "startswith": "���� ��",
                    "contains": "�����",
                    "doesnotcontain": "�� �����",
                    "endswith": "����� �",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����",
                    "isempty": "����",
                    "isnotempty": "��� �����",
                    "isnullorempty": "��� �� ����",
                    "isnotnullorempty": "�� ����"
                },
                "number": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "gte": "���� �� �� �����",
                    "gt": "���� ��",
                    "lte": "��� �� �� �����",
                    "lt": "��� ��",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����"
                },
                "date": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "gte": "��� �� �����",
                    "gt": "���",
                    "lte": "��� �� �����",
                    "lt": "���",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����"
                },
                "enums": {
                    "eq": "�����",
                    "neq": "�� �����",
                    "isnull": "��� ����",
                    "isnotnull": "�� ����"
                }
            });
    }

    /* FilterMultiCheck messages */

    if (kendo.ui.FilterMultiCheck) {
        kendo.ui.FilterMultiCheck.prototype.options.messages =
            $.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages, {
                "checkAll": "���� ����",
                "clearAll": "����� ����",
                "clear": "�����",
                "filter": "���",
                "search": "���",
                "cancel": "�����",
                "selectedItemsFormat": "{0} ������� ��������",
                "done": "��",
                "into": "��"
            });
    }

    /* Gantt messages */

    if (kendo.ui.Gantt) {
        kendo.ui.Gantt.prototype.options.messages =
            $.extend(true, kendo.ui.Gantt.prototype.options.messages, {
                "actions": {
                    "addChild": "��� ����� ����",
                    "append": "����� ����",
                    "insertAfter": "��� ��� ������",
                    "insertBefore": "��� ��� ������",
                    "pdf": "PDF ����� ��� ���"
                },
                "cancel": "�����",
                "deleteDependencyWindowTitle": "��� ������� ����������",
                "deleteTaskWindowTitle": "��� ������",
                "destroy": "���",
                "editor": {
                    "assingButton": "�����",
                    "editorTitle": "����",
                    "end": "�����",
                    "percentComplete": "������",
                    "plannedStart": "������� ������ ���",
                    "plannedEnd": "������� ������ ���",
                    "resources": "�����",
                    "resourcesEditorTitle": "�����",
                    "resourcesHeader": "�����",
                    "start": "�����",
                    "title": "�����",
                    "unitsHeader": "�������"
                },
                "plannedTasks": {
                    "switchText": "������ ������ ���",
                    "offsetTooltipAdvanced": "��� ��� ������ ������� ������",
                    "offsetTooltipDelay": "�����",
                    "seconds": "�����",
                    "minutes": "�����",
                    "hours": "�����",
                    "days": "����"
                },
                "save": "���",
                "views": {
                    "day": "���",
                    "end": "�����",
                    "month": "���",
                    "start": "�����",
                    "week": "�����",
                    "year": "���"
                }
            });
    }

    /* Grid messages */

    if (kendo.ui.Grid) {
        kendo.ui.Grid.prototype.options.messages =
            $.extend(true, kendo.ui.Grid.prototype.options.messages, {
                "commands": {
                    "cancel": "����� ���������",
                    "canceledit": "�����",
                    "create": "����� ��� ����",
                    "destroy": "���",
                    "edit": "�����",
                    "excel": "Excel ����� ���",
                    "pdf": "����� ��� PDF",
                    "save": "��� ���������",
                    "select": "����",
                    "update": "�����"
                },
                "editable": {
                    "cancelDelete": "�����",
                    "confirmation": "�� ��� ����� �� ��� �����",
                    "confirmDelete": "���"
                },
                "noRecords": "�� ���� ����� �����.",
                "search": "���...",
                "expandCollapseColumnHeader": "",
                "groupHeader": "ctrl + space ���� ������ ����",
                "ungroupHeader": "ctrl + space ������ �������� ����"
            });
    }

    /* TaskBoard messages */

    if (kendo.ui.TaskBoard) {
        kendo.ui.TaskBoard.prototype.options.messages =
            $.extend(true, kendo.ui.TaskBoard.prototype.options.messages, {
                "edit": "�����",
                "createNewCard": "����� ����� �����",
                "create": "�����",
                "search": "���",
                "previewCard": "������ �������",
                "addCard": "����� �����",
                "editCard": "����� �������",
                "deleteCard": "��� �������",
                "addColumn": "����� ����",
                "editColumn": "����� ������",
                "deleteColumn": "��� ������",
                "close": "�����",
                "cancel": "�����",
                "delete": "���",
                "saveChanges": "��� ���������",
                "title": "�������:",
                "description": "�����:",
                "newColumn": "���� ����",
                "deleteColumnConfirm": "�� ��� ����� �� ��� ��� �����Ͽ",
                "deleteCardConfirm": "�� ��� ����� �� ��� ������ɿ"
            });
    }

    /* TreeList messages */

    if (kendo.ui.TreeList) {
        kendo.ui.TreeList.prototype.options.messages =
            $.extend(true, kendo.ui.TreeList.prototype.options.messages, {
                "noRows": "�� ���� ����� ������",
                "loading": "��� �������...",
                "requestFailed": "��� �����.",
                "retry": "��� ��������",
                "commands": {
                    "edit": "�����",
                    "update": "�����",
                    "canceledit": "�����",
                    "create": "����� ��� ����",
                    "createchild": "����� ��� ����",
                    "destroy": "���",
                    "excel": "Excel ����� ���",
                    "pdf": "PDF ����� ���"
                }
            });
    }

    /* Groupable messages */

    if (kendo.ui.Groupable) {
        kendo.ui.Groupable.prototype.options.messages =
            $.extend(true, kendo.ui.Groupable.prototype.options.messages, {
                "empty": "���� ��� ������ ������ ��� ������� ������ ��� ������"
            });
    }

    /* NumericTextBox messages */

    if (kendo.ui.NumericTextBox) {
        kendo.ui.NumericTextBox.prototype.options =
            $.extend(true, kendo.ui.NumericTextBox.prototype.options, {
                "upArrowText": "����� ������",
                "downArrowText": "����� ������"
            });
    }

    /* MediaPlayer messages */

    if (kendo.ui.MediaPlayer) {
        kendo.ui.MediaPlayer.prototype.options.messages =
            $.extend(true, kendo.ui.MediaPlayer.prototype.options.messages, {
                "pause": "����� ����",
                "play": "�����",
                "mute": "��� �����",
                "unmute": "����� ��� �����",
                "quality": "������",
                "fullscreen": "����� ������"
            });
    }

    /* Pager messages */

    if (kendo.ui.Pager) {
        kendo.ui.Pager.prototype.options.messages =
            $.extend(true, kendo.ui.Pager.prototype.options.messages, {
                "allPages": "����",
                "display": "{0} - {1} �� {2} �����",
                "empty": "�� ���� ����� ������",
                "page": "����",
                "pageButtonLabel": "���� {0}",
                "pageSizeDropDownLabel": "����� ��� ����� ������",
                "of": "�� {0}",
                "itemsPerPage": "����� �� ����",
                "first": "���� ��� ������ ������",
                "previous": "���� ��� ������ �������",
                "next": "���� ��� ������ �������",
                "last": "���� ��� ������ �������",
                "refresh": "�����",
                "morePages": "������ �� �������"
            });
    }

    /* TreeListPager messages */

    if (kendo.ui.TreeListPager) {
        kendo.ui.TreeListPager.prototype.options.messages =
            $.extend(true, kendo.ui.TreeListPager.prototype.options.messages, {
                "allPages": "����",
                "display": "{0} - {1} of {2} �������",
                "empty": "�� ���� ����� ������",
                "page": "����",
                "of": "�� {0}",
                "itemsPerPage": "���� �� ����",
                "first": "���� ��� ���� ������",
                "previous": "���� ��� ������ �������",
                "next": "���� ��� ������ �������",
                "last": "���� ��� ������ �������",
                "refresh": "�����",
                "morePages": "������ �� �������"
            });
    }

    /* PivotGrid messages */

    if (kendo.ui.PivotGrid) {
        kendo.ui.PivotGrid.prototype.options.messages =
            $.extend(true, kendo.ui.PivotGrid.prototype.options.messages, {
                "measureFields": "��� ���� �������� ���",
                "columnFields": "��� ���� ������ ���",
                "rowFields": "���� ���� ������ ���"
            });
    }

    /* PivotFieldMenu messages */

    if (kendo.ui.PivotFieldMenu) {
        kendo.ui.PivotFieldMenu.prototype.options.messages =
            $.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages, {
                "info": "����� ������� ��� ������ ����:",
                "filterFields": "��� ������",
                "filter": "���",
                "include": "����� ������...",
                "title": "������ ���� ��� �������",
                "clear": "�����",
                "ok": "����",
                "cancel": "�����",
                "operators": {
                    "contains": "�����",
                    "doesnotcontain": "�� �����",
                    "startswith": "���� �",
                    "endswith": "����� �",
                    "eq": "�����",
                    "neq": "�� �����"
                }
            });
    }

    /* RecurrenceEditor messages */

    if (kendo.ui.RecurrenceEditor) {
        kendo.ui.RecurrenceEditor.prototype.options.messages =
            $.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages, {
                "repeat": "�����",
                "recurrenceEditorTitle": "���� �������",
                "frequencies": {
                    "never": "�����",
                    "hourly": "�� ����",
                    "daily": "������",
                    "weekly": "�������",
                    "monthly": "������",
                    "yearly": "����"
                },
                "hourly": {
                    "repeatEvery": ":����� ��",
                    "interval": "����"
                },
                "daily": {
                    "repeatEvery": "����� ��:",
                    "interval": "���"
                },
                "weekly": {
                    "interval": "�����",
                    "repeatEvery": "����� ��:",
                    "repeatOn": "����� ���:"
                },
                "monthly": {
                    "repeatEvery": "����� ��:",
                    "repeatOn": "����� ���:",
                    "interval": "���",
                    "day": "���",
                    "date": "�����"
                },
                "yearly": {
                    "repeatEvery": "����� ��:",
                    "repeatOn": "��� ���:",
                    "interval": "���",
                    "of": "��",
                    "month": "���",
                    "day": "���",
                    "date": "�����"
                },
                "end": {
                    "label": "�������:",
                    "mobileLabel": "�����",
                    "never": "�����",
                    "after": "���",
                    "occurrence": "��� (����)",
                    "on": "�����"
                },
                "offsetPositions": {
                    "first": "�����",
                    "second": "������",
                    "third": "������",
                    "fourth": "������",
                    "last": "������"
                },
                "weekdays": {
                    "day": "���",
                    "weekday": "��� �� ���� �������",
                    "weekend": "��� ���� ����� �������"
                }
            });
    }

    /* MobileRecurrenceEditor messages */

    if (kendo.ui.MobileRecurrenceEditor) {
        kendo.ui.MobileRecurrenceEditor.prototype.options.messages =
            $.extend(true, kendo.ui.MobileRecurrenceEditor.prototype.options.messages, kendo.ui.RecurrenceEditor.prototype.options.messages, {
                "cancel": "�����",
                "update": "���",
                "endTitle": "����� �������",
                "repeatTitle": "���� �����",
                "headerTitle": "����� �����",
                "end": {
                    "patterns": {
                        "never": "�����",
                        "after": "���...",
                        "on": "�����..."
                    },
                    "never": "�����",
                    "after": "����� ������� ���",
                    "on": "����� ������� ���"
                },
                "daily": {
                    "interval": ""
                },
                "hourly": {
                    "interval": ""
                },
                "weekly": {
                    "interval": ""
                },
                "monthly": {
                    "interval": "",
                    "repeatBy": "����� ������:",
                    "dayOfMonth": "��� �� �����",
                    "dayOfWeek": "��� �� �������",
                    "repeatEvery": "����� ��",
                    "every": "��",
                    "day": "���"
                },
                "yearly": {
                    "interval": "",
                    "repeatBy": ":����� ������",
                    "dayOfMonth": "��� �� �����",
                    "dayOfWeek": "��� �� �������",
                    "repeatEvery": ":����� ��",
                    "every": "��",
                    "month": "���",
                    "day": "���"
                }
            });
    }

    /* Scheduler messages */

    if (kendo.ui.Scheduler) {
        kendo.ui.Scheduler.prototype.options.messages =
            $.extend(true, kendo.ui.Scheduler.prototype.options.messages, {
                "allDay": "���� �����",
                "date": "�����",
                "event": "���",
                "time": "���",
                "showFullDay": "��� ���� �����",
                "showWorkDay": "��� ����� �����",
                "today": "�����",
                "save": "���",
                "cancel": "�����",
                "destroy": "���",
                "resetSeries": "����� ��� �������",
                "deleteWindowTitle": "��� �����",
                "ariaSlotLabel": "���� ��{0:t} ��� {1:t}",
                "ariaEventLabel": "{0} ��{1:D} ��� {2:t}",
                "editable": {
                    "confirmation": "�� ��� ����� �� ��� ����˿"
                },
                "views": {
                    "day": "���",
                    "week": "�����",
                    "workWeek": "����� �����",
                    "agenda": "���� �������",
                    "month": "���"
                },
                "recurrenceMessages": {
                    "deleteWindowTitle": "��� ������ �������",
                    "resetSeriesWindowTitle": "����� ��� �������",
                    "deleteWindowOccurrence": "��� ����� ������",
                    "deleteWindowSeries": "��� �������",
                    "deleteRecurringConfirmation": "�� ��� ����� �� ��� ��� ����˿",
                    "deleteSeriesConfirmation": "�� ��� ����� ��� ������� ������ǿ",
                    "editWindowTitle": "����� ������ �������",
                    "editWindowOccurrence": "����� ����� ������",
                    "editWindowSeries": "����� �������",
                    "deleteRecurring": "�� ���� ��� ��� ����� ��� �� ������� ������ǿ",
                    "editRecurring": "�� ���� ����� ��� ����� ��� �� ������� ������ǿ"
                },
                "editor": {
                    "title": "�����",
                    "start": "���",
                    "end": "�����",
                    "allDayEvent": "��� ����� ������",
                    "description": "���",
                    "repeat": "�����",
                    "timezone": " ",
                    "startTimezone": "��� ���� �������",
                    "endTimezone": "����� ���� �������",
                    "separateTimezones": "������� ����� ����� ������ ����� ���������",
                    "timezoneEditorTitle": "������� �������",
                    "timezoneEditorButton": "������� �������",
                    "timezoneTitle": "������� �������",
                    "noTimezone": "��� ���� �����",
                    "editorTitle": "���"
                },
                "search": "���..."
            });
    }

    /* Spreadsheet messages */

    if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
        kendo.spreadsheet.messages.borderPalette =
            $.extend(true, kendo.spreadsheet.messages.borderPalette, {
                "allBorders": "�� �������",
                "insideBorders": "������ ��������",
                "insideHorizontalBorders": "���� ����� ������",
                "insideVerticalBorders": "���� ������ ������",
                "outsideBorders": "������ ��������",
                "leftBorder": "���� ������",
                "topBorder": "���� ������",
                "rightBorder": "���� ������",
                "bottomBorder": "���� ������",
                "noBorders": "��� ����",
                "reset": "����� ����� �����",
                "customColor": "��� �����...",
                "apply": "�����",
                "cancel": "�����"
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
        kendo.spreadsheet.messages.dialogs =
            $.extend(true, kendo.spreadsheet.messages.dialogs, {
                "apply": "�����",
                "save": "���",
                "cancel": "�����",
                "remove": "���",
                "retry": "��� ��������",
                "revert": "�����",
                "okText": "�����",
                "formatCellsDialog": {
                    "title": "����",
                    "categories": {
                        "number": "���",
                        "currency": "����",
                        "date": "�����"
                    }
                },
                "fontFamilyDialog": {
                    "title": "����"
                },
                "fontSizeDialog": {
                    "title": "��� ����"
                },
                "bordersDialog": {
                    "title": "����"
                },
                "alignmentDialog": {
                    "title": "��������",
                    "buttons": {
                        "justtifyLeft": "������ ��� ������",
                        "justifyCenter": "���",
                        "justifyRight": "������ ��� ������",
                        "justifyFull": "���",
                        "alignTop": "������ ��� ������",
                        "alignMiddle": "������ ��� �������",
                        "alignBottom": "������ ��� ������"
                    }
                },
                "mergeDialog": {
                    "title": "��� �������",
                    "buttons": {
                        "mergeCells": "��� ����",
                        "mergeHorizontally": "��� ������",
                        "mergeVertically": "��� �����",
                        "unmerge": "�� �����"
                    }
                },
                "freezeDialog": {
                    "title": "����� �������",
                    "buttons": {
                        "freezePanes": "����� �������",
                        "freezeRows": "����� ������",
                        "freezeColumns": "����� �������",
                        "unfreeze": "����� ����� �������"
                    }
                },
                "confirmationDialog": {
                    "text": "�� ��� ����� �� ����� ��� �����ɿ",
                    "title": "����� ����"
                },
                "validationDialog": {
                    "title": "����� ��� ��������",
                    "hintMessage": "������ ����� ���� ����� {0} ����� {1}.",
                    "hintTitle": "������ {0}",
                    "criteria": {
                        "any": "�� ����",
                        "number": "���",
                        "text": "��",
                        "date": "�����",
                        "custom": "���� �����",
                        "list": "�����"
                    },
                    "comparers": {
                        "greaterThan": "���� ��",
                        "lessThan": "��� ��",
                        "between": "���",
                        "notBetween": "��� ���",
                        "equalTo": "�����",
                        "notEqualTo": "�� �����",
                        "greaterThanOrEqualTo": "���� �� �� �����",
                        "lessThanOrEqualTo": "��� �� �� �����"
                    },
                    "comparerMessages": {
                        "greaterThan": "���� �� {0}",
                        "lessThan": "��� �� {0}",
                        "between": "��� {0} � {1}",
                        "notBetween": "��� ��� {0} � {1}",
                        "equalTo": "����� {0}",
                        "notEqualTo": "�� ����� {0}",
                        "greaterThanOrEqualTo": "���� �� �� ����� {0}",
                        "lessThanOrEqualTo": "���� �� �� ����� {0}",
                        "custom": "���� ������ �� ������: {0}"
                    },
                    "labels": {
                        "criteria": "�������� ������",
                        "comparer": "��������",
                        "min": "�� ����",
                        "max": "�� ����",
                        "value": "����",
                        "start": "���",
                        "end": "�����",
                        "onInvalidData": "��� ������ ��� �����",
                        "rejectInput": "��� �������",
                        "showWarning": "����� �������",
                        "showHint": "����� �������",
                        "hintTitle": "����� �������",
                        "hintMessage": "����� �����",
                        "ignoreBlank": "����� ������"
                    },
                    "placeholders": {
                        "typeTitle": "���� �������",
                        "typeMessage": "���� �������"
                    }
                },
                "exportAsDialog": {
                    "title": "�����...",
                    "labels": {
                        "fileName": "��� �����",
                        "saveAsType": "��� ����",
                        "exportArea": "�����",
                        "paperSize": "��� �����",
                        "margins": "�������",
                        "orientation": "�����",
                        "print": "�����",
                        "guidelines": "������� ���������",
                        "center": "���",
                        "horizontally": "�����",
                        "vertically": "������"
                    }
                },
                "modifyMergedDialog": {
                    "errorMessage": "�� ���� ����� ��� �� ������ �������."
                },
                "useKeyboardDialog": {
                    "title": "����� ������",
                    "errorMessage": "�� ���� ������� ��� ��������� �� ���� �������. ������ ����� �� ��� ������� �������� ���� ��������:",
                    "labels": {
                        "forCopy": "�����",
                        "forCut": "����",
                        "forPaste": "����"
                    }
                },
                "unsupportedSelectionDialog": {
                    "errorMessage": "�� ���� ����� ��� ������� ��� ������ �� �����."
                },
                "insertCommentDialog": {
                    "title": "����� �����",
                    "labels": {
                        "comment": "�����",
                        "removeComment": "��� �����"
                    }
                },
                "insertImageDialog": {
                    "title": "����� ����",
                    "info": "���� ���� ��ǡ �� ���� ��������",
                    "typeError": "������ ����� ���� ������ JPEG �� PNG �� GIF"
                }
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
        kendo.spreadsheet.messages.filterMenu =
            $.extend(true, kendo.spreadsheet.messages.filterMenu, {
                "sortAscending": "���� ������� �� � ��� �",
                "sortDescending": "���� ������� �� � ��� �",
                "filterByValue": "��� ��� ������",
                "filterByCondition": "��� ��� �����",
                "apply": "�����",
                "search": "���",
                "addToCurrent": "��� ��� �������� ������",
                "clear": "���",
                "blanks": "(������)",
                "operatorNone": "�� ���",
                "and": "�",
                "or": "��",
                "operators": {
                    "string": {
                        "contains": "����� ���� ���",
                        "doesnotcontain": "�� ����� ���� ���",
                        "startswith": "���� ���� ��",
                        "endswith": "����� ���� ��"
                    },
                    "date": {
                        "eq": "������� ��",
                        "neq": "������� ���",
                        "lt": "������� ���",
                        "gt": "������� ���"
                    },
                    "number": {
                        "eq": "�����",
                        "neq": "�� �����",
                        "gte": "���� �� �� �����",
                        "gt": "���� ��",
                        "lte": "���� �� �� �����",
                        "lt": "��� ��"
                    }
                }
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
        kendo.spreadsheet.messages.colorPicker =
            $.extend(true, kendo.spreadsheet.messages.colorPicker, {
                "reset": "����� ����� �����",
                "customColor": "��� �����...",
                "apply": "�����",
                "cancel": "�����"
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
        kendo.spreadsheet.messages.toolbar =
            $.extend(true, kendo.spreadsheet.messages.toolbar, {
                "addColumnLeft": "��� ���� ��� ������",
                "addColumnRight": "��� ���� ��� ������",
                "addRowAbove": "��� �� ��� ������",
                "addRowBelow": "��� �� ��� ������",
                "alignment": "������",
                "alignmentButtons": {
                    "justtifyLeft": "������ ��� ������",
                    "justifyCenter": "���",
                    "justifyRight": "������ ��� ������",
                    "justifyFull": "���",
                    "alignTop": "������ ��� ������",
                    "alignMiddle": "������ ��� �������",
                    "alignBottom": "������ �����"
                },
                "backgroundColor": "�����",
                "bold": "����",
                "borders": "����",
                "colorPicker": {
                    "reset": "����� ����� �����",
                    "customColor": "��� ����..."
                },
                "copy": "���",
                "cut": "��",
                "deleteColumn": "��� ����",
                "deleteRow": "��� ��",
                "excelImport": "������� �� Excel...",
                "filter": "����",
                "fontFamily": "����",
                "fontSize": "��� ����",
                "format": "����� ����...",
                "formatTypes": {
                    "automatic": "����������",
                    "number": "���",
                    "percent": "���� �����",
                    "financial": "����",
                    "currency": "����",
                    "date": "�����",
                    "time": "�����",
                    "dateTime": "��� �������",
                    "duration": "���",
                    "moreFormats": "������ �� ���������..."
                },
                "formatDecreaseDecimal": "����� ������� �������",
                "formatIncreaseDecimal": "����� ������� �������",
                "freeze": "����� �������",
                "freezeButtons": {
                    "freezePanes": "����� �������",
                    "freezeRows": "����� ������",
                    "freezeColumns": "����� �������",
                    "unfreeze": "����� ����� �������"
                },
                "insertComment": "����� �����",
                "insertImage": "����� ����",
                "italic": "����",
                "merge": "��� �������",
                "mergeButtons": {
                    "mergeCells": "��� ����",
                    "mergeHorizontally": "��� ����",
                    "mergeVertically": "��� ����",
                    "unmerge": "����� �����"
                },
                "open": "���...",
                "paste": "���",
                "quickAccess": {
                    "redo": "�����",
                    "undo": "�����"
                },
                "saveAs": "��� ����...",
                "sortAsc": "����� ������",
                "sortDesc": "����� ������",
                "sortButtons": {
                    "sortSheetAsc": "��� ������ �� � ��� �",
                    "sortSheetDesc": "��� ������ �� � ��� �",
                    "sortRangeAsc": "��� �� � ��� �",
                    "sortRangeDesc": "��� �� � ��� �"
                },
                "textColor": "��� ����",
                "textWrap": "����� ����",
                "underline": "�� ���� ����",
                "validation": "������ �� ��� ��������.."
            });
    }

    if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
        kendo.spreadsheet.messages.view =
            $.extend(true, kendo.spreadsheet.messages.view, {
                "errors": {
                    "shiftingNonblankCells": "�� ����� ����� ������� ������� ��� ��������. �� ������ ���� ��� �� ��� �������� �� ����� ���� �����.",
                    "filterRangeContainingMerges": "�� ���� ����� ���� ���� ����� �����",
                    "validationError": "������ ���� ������� ����� ������� ���� �� ������."
                },
                "tabs": {
                    "home": "������ ��������",
                    "insert": "�����",
                    "data": "��������"
                }
            });
    }

    /* Slider messages */

    if (kendo.ui.Slider) {
        kendo.ui.Slider.prototype.options =
            $.extend(true, kendo.ui.Slider.prototype.options, {
                "increaseButtonTitle": "�����",
                "decreaseButtonTitle": "������"
            });
    }

    /* ListBox messaages */

    if (kendo.ui.ListBox) {
        kendo.ui.ListBox.prototype.options.messages =
            $.extend(true, kendo.ui.ListBox.prototype.options.messages, {
                "tools": {
                    "remove": "���",
                    "moveUp": "����� ������",
                    "moveDown": "����� �����",
                    "transferTo": "��� ���",
                    "transferFrom": "��� ��",
                    "transferAllTo": "��� ���� ���",
                    "transferAllFrom": "��� ���� ��"
                }
            });
    }

    /* TreeList messages */

    if (kendo.ui.TreeList) {
        kendo.ui.TreeList.prototype.options.messages =
            $.extend(true, kendo.ui.TreeList.prototype.options.messages, {
                "noRows": "�� ���� ����� ������",
                "loading": "��� �������...",
                "requestFailed": "��� �����.",
                "retry": "��� ��������",
                "commands": {
                    "edit": "�����",
                    "update": "�����",
                    "canceledit": "�����",
                    "create": "����� ��� ����",
                    "createchild": "����� ��� ����",
                    "destroy": "���",
                    "excel": "Excel ����� ���",
                    "pdf": "PDF ����� ���"
                }
            });
    }

    /* TreeView messages */

    if (kendo.ui.TreeView) {
        kendo.ui.TreeView.prototype.options.messages =
            $.extend(true, kendo.ui.TreeView.prototype.options.messages, {
                "loading": "��� �������...",
                "requestFailed": "��� �����.",
                "retry": "��� ��������"
            });
    }

    /* Upload messages */

    if (kendo.ui.Upload) {
        kendo.ui.Upload.prototype.options.localization =
            $.extend(true, kendo.ui.Upload.prototype.options.localization, {
                "select": "����� �������...",
                "cancel": "�����",
                "retry": "��� ��������",
                "remove": "�����",
                "clearSelectedFiles": "�����",
                "uploadSelectedFiles": "��� �����",
                "dropFilesHere": "�� ���� ����� ��� �����",
                "statusUploading": "��� �����",
                "statusUploaded": "�� �����",
                "statusWarning": "�����",
                "statusFailed": "���",
                "headerStatusPaused": "�����",
                "headerStatusUploading": "��� �����...",
                "headerStatusUploaded": "��",
                "uploadSuccess": "(�� ��� ����� (�������.",
                "uploadFail": "(��� ��� ����� (�������.",
                "invalidMaxFileSize": "��� ����� ���� ����.",
                "invalidMinFileSize": "��� ����� ���� ����.",
                "invalidFileExtension": "��� ����� ��� ����� ��."
            });
    }

    /* Validator messages */

    if (kendo.ui.Validator) {
        kendo.ui.Validator.prototype.options.messages =
            $.extend(true, kendo.ui.Validator.prototype.options.messages, {
                "required": "{0} �����",
                "pattern": "{0} ��� ����",
                "min": "{0} ��� �� ���� ���� �� �� ����� {1}",
                "max": "{0} ��� �� ���� ���� �� �� ����� {1}",
                "step": "{0} ��� ����",
                "email": "{0} ���� �������� ��� ����",
                "url": "{0} ���� ��� ����",
                "date": "{0} ����� ��� ����",
                "dateCompare": "��� �� ���� ����� �������� ���� �� �� ����� ����� �����"
            });
    }

    /* kendo.ui.progress method */
    if (kendo.ui.progress) {
        kendo.ui.progress.messages =
            $.extend(true, kendo.ui.progress.messages, {
                "loading": "���� �������..."
            });
    }

    /* Dialog */

    if (kendo.ui.Dialog) {
        kendo.ui.Dialog.prototype.options.messages =
            $.extend(true, kendo.ui.Dialog.prototype.options.localization, {
                "close": "�����"
            });
    }

    /* Calendar */
    if (kendo.ui.Calendar) {
        kendo.ui.Calendar.prototype.options.messages =
            $.extend(true, kendo.ui.Calendar.prototype.options.messages, {
                "weekColumnHeader": ""
            });
    }

    /* Alert */

    if (kendo.ui.Alert) {
        kendo.ui.Alert.prototype.options.messages =
            $.extend(true, kendo.ui.Alert.prototype.options.localization, {
                "okText": "�����"
            });
    }

    /* Confirm */

    if (kendo.ui.Confirm) {
        kendo.ui.Confirm.prototype.options.messages =
            $.extend(true, kendo.ui.Confirm.prototype.options.localization, {
                "okText": "�����",
                "cancel": "�����"
            });
    }

    /* Prompt */
    if (kendo.ui.Prompt) {
        kendo.ui.Prompt.prototype.options.messages =
            $.extend(true, kendo.ui.Prompt.prototype.options.localization, {
                "okText": "�����",
                "cancel": "�����"
            });
    }

    /* DateInput */
    if (kendo.ui.DateInput) {
        kendo.ui.DateInput.prototype.options.messages =
            $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
                "year": "���",
                "month": "���",
                "day": "���",
                "weekday": "��� �� �������",
                "hour": "�����",
                "minute": "�����",
                "second": "�����",
                "dayperiod": "AM/PM"
            });
    }

    /* List messages */

    if (kendo.ui.List) {
        kendo.ui.List.prototype.options.messages =
            $.extend(true, kendo.ui.List.prototype.options.messages, {
                "clear": "�����",
                "noData": "�� ���� ������."
            });
    }

    /* DropDownList messages */

    if (kendo.ui.DropDownList) {
        kendo.ui.DropDownList.prototype.options.messages =
            $.extend(true, kendo.ui.DropDownList.prototype.options.messages, kendo.ui.List.prototype.options.messages);
    }

    /* ComboBox messages */

    if (kendo.ui.ComboBox) {
        kendo.ui.ComboBox.prototype.options.messages =
            $.extend(true, kendo.ui.ComboBox.prototype.options.messages, kendo.ui.List.prototype.options.messages);
    }

    /* AutoComplete messages */

    if (kendo.ui.AutoComplete) {
        kendo.ui.AutoComplete.prototype.options.messages =
            $.extend(true, kendo.ui.AutoComplete.prototype.options.messages, kendo.ui.List.prototype.options.messages);
    }

    /* MultiColumnComboBox messages */

    if (kendo.ui.MultiColumnComboBox) {
        kendo.ui.MultiColumnComboBox.prototype.options.messages =
            $.extend(true, kendo.ui.MultiColumnComboBox.prototype.options.messages, kendo.ui.List.prototype.options.messages);
    }

    /* DropDownTree messages */

    if (kendo.ui.DropDownTree) {
        kendo.ui.DropDownTree.prototype.options.messages =
            $.extend(true, kendo.ui.DropDownTree.prototype.options.messages, {
                "singleTag": "���� (�����) �����",
                "clear": "�����",
                "deleteTag": "���",
                "noData": "�� ��� ����� ������."
            });
    }

    /* MultiSelect messages */

    if (kendo.ui.MultiSelect) {
        kendo.ui.MultiSelect.prototype.options.messages =
            $.extend(true, kendo.ui.MultiSelect.prototype.options.messages, {
                "singleTag": "���� (�����) �����",
                "clear": "�����",
                "deleteTag": "���",
                "noData": "�� ���� ������."
            });
    }

    /* Chat messages */

    if (kendo.ui.Chat) {
        kendo.ui.Chat.prototype.options.messages =
            $.extend(true, kendo.ui.Chat.prototype.options.messages, {
                "placeholder": "���� ����...",
                "toggleButton": "����� ���� �������",
                "sendButton": "���� �����"
            });
    }

    /* Wizard messages */

    if (kendo.ui.Wizard) {
        kendo.ui.Wizard.prototype.options.messages =
            $.extend(true, kendo.ui.Wizard.prototype.options.messages, {
                "reset": "����� �����",
                "previous": "������",
                "next": "������",
                "done": "��",
                "step": "����",
                "of": "��"
            });
    }

    /* PDFViewer messages */

    if (kendo.ui.PDFViewer) {
        kendo.ui.PDFViewer.prototype.options.messages =
            $.extend(true, kendo.ui.PDFViewer.prototype.options.messages, {
                defaultFileName: "�����",
                toolbar: {
                    zoom: {
                        "zoomLevel": "����� �������/�������",
                        "zoomOut": "�����",
                        "zoomIn": "�����",
                        "actualWidth": "����� �������",
                        "autoWidth": "��� ����� ��������",
                        "fitToWidth": "������ �� �����",
                        "fitToPage": "����� ������"
                    },
                    "open": "���",
                    "exportAs": "�����",
                    "download": "�����",
                    pager: {
                        "first": "���� ��� ������ ������",
                        "previous": "���� ��� ������ �������",
                        "next": "���� ��� ������ �������",
                        "last": "���� ��� ������ �������",
                        "of": "�� {0}",
                        "page": "����",
                        "pages": "�����"
                    },
                    "print": "�����",
                    "toggleSelection": "����� �������",
                    "togglePan": "����� �������",
                    "search": "���"
                },
                errorMessages: {
                    "notSupported": "pdf ���� ��� ������.",
                    "parseError": "PDF ��� �� ������ ���.",
                    "notFound": "�� ��� ������ ��� �����.",
                    "popupBlocked": "�� ��� ������� ��������."
                },
                dialogs: {
                    exportAsDialog: {
                        "title": "�����...",
                        "defaultFileName": "�����",
                        "pdf": "(.pdf) ����� ��������� �������",
                        "png": "����� ���� ��������� ������� (.png)",
                        "svg": "����� ��������� ������� (.svg)",
                        "labels": {
                            "fileName": "��� �����",
                            "saveAsType": "��� ����",
                            "page": "����"
                        }
                    },
                    "okText": "����",
                    "save": "���",
                    "cancel": "�����",
                    "search": {
                        "inputLabel": "�� �����",
                        "matchCase": "���� �������",
                        "next": "������� ������",
                        "previous": "������� ������",
                        "close": "�����",
                        "of": "��"
                    }
                }
            });
    }

    /* Captcha messages */

    if (kendo.ui.Captcha) {
        kendo.ui.Captcha.prototype.options.messages =
            $.extend(true, kendo.ui.Captcha.prototype.options.messages, {
                "reset": "����� ����� ���� ������",
                "audio": "��� ���� ������",
                "imageAlt": "���� ���� ������ ��� �� ������",
                "success": "�� ������ �����"
            });
    }

    /* OrgChart messages */

    if (kendo.ui.OrgChart) {
        kendo.ui.OrgChart.prototype.options.messages =
            $.extend(true, kendo.ui.OrgChart.prototype.options.messages, {
                label: "������ ��������",
                edit: "�����",
                create: "�����",
                destroy: "���",
                destroyContent: "�� ��� ����� �� ��� ��� ������ �������� ������� ��",
                destroyTitle: "��� ����",
                cancel: "�����",
                save: "���",
                menuLabel: "����� �������",
                uploadAvatar: "����� ���� �����",
                parent: "���� �����",
                name: "�����",
                title: "�������",
                none: "--�� ���--",
                expand: "���",
                collapse: "��"
            });
    }
})(window.kendo.jQuery);