DEFINE VARIABLE cTargetType AS CHARACTER NO-UNDO.
DEFINE VARIABLE cFile       AS CHARACTER NO-UNDO.
DEFINE VARIABLE lFormatted  AS LOGICAL   NO-UNDO.
DEFINE VARIABLE lRetOK      AS LOGICAL   NO-UNDO.

DEFINE TEMP-TABLE ttModalidade NO-UNDO
    field cd-modalidade like modalid.cd-modalidade
    field ds-modalidade like modalid.ds-modalidade.

FOR EACH modalid NO-LOCK:

    CREATE ttModalidade.
    ASSIGN ttModalidade.cd-modalidade = modalid.cd-modalidade
           ttModalidade.ds-modalidade = modalid.ds-modalidade.

END.

/* Code to populate the temp-table */  
ASSIGN  
  cTargetType = "file" 
  cFile       = "c:\temp\ttModalidade.json" 
  lFormatted  = TRUE. 
lRetOK = TEMP-TABLE ttModalidade:WRITE-JSON(cTargetType, cFile, lFormatted).