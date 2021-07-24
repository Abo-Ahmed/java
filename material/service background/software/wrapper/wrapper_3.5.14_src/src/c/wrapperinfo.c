/*
 * Copyright (c) 1999, 2011 Tanuki Software, Ltd.
 * http://www.tanukisoftware.com
 * All rights reserved.
 *
 * This software is the proprietary information of Tanuki Software.
 * You shall use it only in accordance with the terms of the
 * license agreement you entered into with Tanuki Software.
 * http://wrapper.tanukisoftware.org/doc/english/licenseOverview.html
 */



#include "wrapper_i18n.h"
#ifdef WIN32
#include <tchar.h>
#include <windows.h>
#endif
/**
 * wrapperinfo.c is built as part of the build process.  Ant creates this
 *  file by making a copy of wrapperinfo.c.in, replacing tokens as it does
 *  so.  If you need to make modifications to this file, the changes should
 *  always be made to wrapperinfo.c.in.
 */

TCHAR *wrapperVersionRoot = TEXT("3.5.14");
TCHAR *wrapperVersion = TEXT("3.5.14");
TCHAR *wrapperBits = TEXT("64");
TCHAR *wrapperArch = TEXT("x86");
TCHAR *wrapperOS = TEXT("windows");
TCHAR *wrapperReleaseDate = TEXT("20120209");
TCHAR *wrapperReleaseTime = TEXT("0000");
TCHAR *wrapperBuildDate = TEXT("20120329");
TCHAR *wrapperBuildTime = TEXT("2307");

